import { atom } from 'nanostores';
import { programSchema, type Program } from '@/types/program';
import { programFilterSchema, type ProgramFilter } from '@/data/models/DetailedProgram';
import { programs as mockPrograms } from '@/data/mock/programs';
import { programService } from '@/data/services/programService';

export const $programs = atom<Program[]>([]);
export const $programFilter = atom<ProgramFilter>({});

export const programStore = {
  async loadPrograms(filter?: ProgramFilter) {
    try {
      // Validate filter if provided
      if (filter) {
        programFilterSchema.parse(filter);
      }

      const filteredPrograms = await programService.getPrograms(filter);
      
      // Validate programs before setting state
      const validatedPrograms = filteredPrograms.map(program => 
        programSchema.parse(program)
      );
      
      $programs.set(validatedPrograms);
      
      if (filter) {
        $programFilter.set(filter);
      }
    } catch (error) {
      console.error('Failed to load programs:', error);
      // Fallback to mock data in case of error
      $programs.set(mockPrograms);
    }
  },

  async getProgramById(id: string): Promise<Program | null> {
    try {
      const program = await programService.getProgramById(id);
      if (program) {
        // Validate program before returning
        return programSchema.parse(program);
      }
      return null;
    } catch (error) {
      console.error('Failed to get program by ID:', error);
      const mockProgram = mockPrograms.find(p => p.id === id);
      return mockProgram ? programSchema.parse(mockProgram) : null;
    }
  },

  clearFilter() {
    $programFilter.set({});
    this.loadPrograms();
  }
};