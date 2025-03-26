import type { Program } from '@/types/program';
import { programFilterSchema, type ProgramFilter } from '@/data/models/DetailedProgram';
import { programs as mockPrograms } from '@/data/mock/programs';

class ProgramServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProgramServiceError';
  }
}

const filterByPrice = (
  programs: Program[], 
  priceRange: { min: number; max: number }
): Program[] => {
  return programs.filter(program => {
    const price = program.price ? parseFloat(program.price) : 0;
    return price >= priceRange.min && price <= priceRange.max;
  });
};

const applyFilters = (programs: Program[], filter: ProgramFilter): Program[] => {
  let result = [...programs];

  if (filter.language) {
    result = result.filter(p => p.language === filter.language);
  }

  if (filter.duration) {
    result = result.filter(p => p.duration === filter.duration);
  }

  if (filter.priceRange) {
    result = filterByPrice(result, filter.priceRange);
  }

  return result;
};

export const programService = {
  async getPrograms(filter?: ProgramFilter): Promise<Program[]> {
    try {
      // Validate filter if provided
      if (filter) {
        const validatedFilter = programFilterSchema.parse(filter);
        let filteredPrograms = applyFilters(mockPrograms, validatedFilter);
        return filteredPrograms;
      }
      
      return mockPrograms;
    } catch (error) {
      console.error('Error in getPrograms:', error);
      throw new ProgramServiceError('Failed to fetch programs');
    }
  },

  async getProgramById(id: string): Promise<Program | null> {
    try {
      if (!id) {
        throw new Error('Program ID is required');
      }

      const program = mockPrograms.find(p => p.id === id);
      return program || null;
    } catch (error) {
      console.error('Error in getProgramById:', error);
      throw new ProgramServiceError('Failed to fetch program by ID');
    }
  }
};