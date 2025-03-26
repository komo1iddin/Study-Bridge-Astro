import React from 'react';
import { motion } from 'framer-motion';
import { steps } from './data/steps';
import type { Lang } from '@/i18n/langUtils';
import SectionHeader from '@/components/ui/react/section-header';
import ButtonView from '@/components/ui/react/button-view';

interface SuccessPathProps {
  lang: Lang;
}

const SuccessPath: React.FC<SuccessPathProps> = ({ lang }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Xitoyda o'qishga olti bosqichli yo'l"
          subtitle="O'zbekistondan Xitoyga o'qishga ketish uchun eng ishonchli va samarali yo'l"
        />

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-8 mb-12">
                {/* Step Number and Line */}
                <div className="hidden md:flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-32 bg-gray-200"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div 
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    style={{ borderLeftColor: step.color, borderLeftWidth: '4px' }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: step.color }}>
                        {step.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {step.benefits.map((benefit, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <step.icon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <ButtonView
            href={`/${lang}/student-path`}
            text="Batafsil ma'lumot"
            variant="desktop"
            showOnMobile={false}
          />
          <ButtonView
            href={`/${lang}/student-path`}
            text="Batafsil ma'lumot"
            variant="mobile"
            showOnDesktop={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessPath;
