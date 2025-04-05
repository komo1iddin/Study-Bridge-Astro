/**
 * Blog Articles Data Management
 * 
 * This file contains interfaces and utilities for managing blog articles and their sections.
 * It defines the data structures for articles, sections, and provides helper functions
 * for retrieving articles by slug and sections by ID.
 */
export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: ArticleSection[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "studying-in-china",
    title: "Обучение в Китае: полное руководство для иностранных студентов",
    excerpt: "Исчерпывающее руководство по поступлению, обучению и жизни в университетах Китая, с советами по стипендиям, языковой подготовке и культурной адаптации.",
    coverImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    publishedDate: "2023-09-15",
    author: {
      name: "Алексей Петров",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    },
    readTime: "15 мин чтения",
    sections: [
      {
        id: "introduction",
        title: "Введение",
        content: `
          <p class="lead">Китай становится все более популярным направлением для иностранных студентов, привлекая молодых людей со всего мира своими престижными университетами, богатой культурой и развивающейся экономикой.</p>
          
          <p>За последнее десятилетие китайское правительство активно инвестировало в высшее образование, и сегодня в стране находятся некоторые из лучших университетов Азии. В этой статье мы рассмотрим все аспекты обучения в Китае — от выбора университета до культурной адаптации и построения карьеры после выпуска.</p>
          
          <div class="my-6">
            <img src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Университет Цинхуа в Пекине" class="rounded-xl shadow-md w-full" />
            <p class="text-sm text-center text-gray-500 mt-2">Университет Цинхуа в Пекине — один из ведущих университетов Китая</p>
          </div>
          
          <p>Независимо от того, планируете ли вы получить степень бакалавра, магистра или доктора наук, Китай предлагает разнообразные программы на английском и китайском языках практически во всех академических областях.</p>
        `
      },
      {
        id: "why-study-in-china",
        title: "Почему стоит учиться в Китае",
        content: `
          <h3 class="text-xl font-semibold mb-4">Академические преимущества</h3>
          
          <p>Китайские университеты быстро поднимаются в мировых рейтингах. Университет Цинхуа, Пекинский университет и Фуданьский университет регулярно входят в топ-100 лучших учебных заведений мира.</p>
          
          <div class="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-400">
            <p class="font-medium">Известные университеты Китая:</p>
            <ul class="list-disc pl-5 space-y-1 mt-2">
              <li>Университет Цинхуа (Пекин)</li>
              <li>Пекинский университет</li>
              <li>Фуданьский университет (Шанхай)</li>
              <li>Шанхайский университет Цзяо Тун</li>
              <li>Чжэцзянский университет (Ханчжоу)</li>
              <li>Университет науки и технологий Китая (Хэфэй)</li>
            </ul>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Экономические преимущества</h3>
          
          <p>Стоимость обучения и проживания в Китае значительно ниже, чем в США, Великобритании или Австралии. Годовая плата за обучение обычно составляет от 2,000 до 10,000 долларов США, в зависимости от университета и программы.</p>
          
          <p>Кроме того, китайское правительство предлагает щедрые стипендии для иностранных студентов. Стипендия Китайского правительства (Chinese Government Scholarship, CGS) покрывает плату за обучение, проживание, медицинскую страховку и предоставляет ежемесячную стипендию.</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Карьерные перспективы</h3>
          
          <p>Учитывая растущую роль Китая в мировой экономике, опыт обучения в этой стране и знание китайского языка могут стать значительным преимуществом на рынке труда. Многие международные компании активно ищут выпускников с пониманием китайской культуры и бизнес-среды.</p>
          
          <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1526139334526-f591a54b477c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Шанхайский бизнес-центр" class="rounded-xl shadow-md w-full" />
            <img src="https://images.unsplash.com/photo-1518632845062-c22953b3bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Студенты в китайском университете" class="rounded-xl shadow-md w-full" />
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Культурный опыт</h3>
          
          <p>Одним из наиболее ценных аспектов обучения в Китае является возможность погрузиться в одну из древнейших и богатейших культур мира. От изучения языка до участия в традиционных праздниках — жизнь в Китае предлагает множество незабываемых впечатлений.</p>
        `
      },
      {
        id: "application-process",
        title: "Процесс подачи заявления",
        content: `
          <p>Подача заявления в китайский университет может показаться сложной задачей, но процесс хорошо структурирован. Вот пошаговое руководство:</p>
          
          <div class="bg-gradient-to-r from-indigo-100 to-blue-100 p-5 rounded-xl my-6">
            <h4 class="font-bold text-lg text-indigo-800 mb-3">Шаги по поступлению в китайский университет</h4>
            
            <ol class="space-y-4">
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                <div>
                  <p class="font-semibold">Выберите университет и программу</p>
                  <p class="text-sm text-gray-700">Исследуйте доступные программы и выберите те, которые соответствуют вашим академическим интересам.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                <div>
                  <p class="font-semibold">Проверьте требования к поступлению</p>
                  <p class="text-sm text-gray-700">Каждый университет имеет свои требования: академические достижения, языковые требования, рекомендательные письма и т.д.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                <div>
                  <p class="font-semibold">Подготовьте документы</p>
                  <p class="text-sm text-gray-700">Обычно требуются: заполненная форма заявления, копия паспорта, академические транскрипты, сертификаты о знании языка, мотивационное письмо.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                <div>
                  <p class="font-semibold">Подайте заявку на стипендию (опционально)</p>
                  <p class="text-sm text-gray-700">Если вы планируете подать заявку на стипендию, сделайте это одновременно с заявлением в университет.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                <div>
                  <p class="font-semibold">Отправьте документы</p>
                  <p class="text-sm text-gray-700">Отправьте заявление и документы в выбранный университет до указанного срока.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">6</div>
                <div>
                  <p class="font-semibold">Дождитесь решения о приеме</p>
                  <p class="text-sm text-gray-700">Обычно решение принимается в течение 4-8 недель.</p>
                </div>
              </li>
              
              <li class="flex gap-3">
                <div class="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">7</div>
                <div>
                  <p class="font-semibold">Получите визу</p>
                  <p class="text-sm text-gray-700">При получении письма о зачислении, подайте заявление на студенческую визу (X-visa) в ближайшем китайском посольстве или консульстве.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <h3 class="text-xl font-semibold mb-4">Важные сроки</h3>
          
          <p>Большинство университетов имеют два основных периода зачисления:</p>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Осенний семестр (сентябрь):</strong> срок подачи заявлений обычно с января по апрель</li>
            <li><strong>Весенний семестр (февраль/март):</strong> срок подачи заявлений обычно с сентября по ноябрь</li>
          </ul>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p class="font-medium">Важное примечание:</p>
            <p class="text-sm">Для подачи заявки на стипендию Китайского правительства (CGS) сроки обычно заканчиваются раньше — в начале марта или апреле. Проверяйте официальные сайты для получения точной информации.</p>
          </div>
        `
      },
      {
        id: "language-requirements",
        title: "Языковые требования",
        content: `
          <p>В Китае доступны программы как на китайском, так и на английском языках. Однако даже если вы выбрали программу на английском, базовое знание китайского языка будет полезным для повседневной жизни.</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Программы на китайском языке</h3>
          
          <p>Для поступления на программы, преподаваемые на китайском языке, вам потребуется сертификат HSK (Hanyu Shuiping Kaoshi) — стандартизированный тест на знание китайского языка. Уровень, необходимый для поступления, зависит от программы:</p>
          
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Бакалавриат:</strong> обычно требуется HSK 4-5</li>
            <li><strong>Магистратура и докторантура:</strong> обычно требуется HSK 5-6</li>
          </ul>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="bg-white rounded-xl shadow-md p-4 border border-gray-200">
              <h4 class="font-semibold mb-2 text-blue-700">HSK уровни</h4>
              <table class="w-full text-sm">
                <thead>
                  <tr>
                    <th class="text-left pr-2">Уровень</th>
                    <th class="text-left">Описание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pr-2 py-1">HSK 1</td>
                    <td>Базовые навыки (150 слов)</td>
                  </tr>
                  <tr>
                    <td class="pr-2 py-1">HSK 2</td>
                    <td>Элементарный (300 слов)</td>
                  </tr>
                  <tr>
                    <td class="pr-2 py-1">HSK 3</td>
                    <td>Промежуточный (600 слов)</td>
                  </tr>
                  <tr>
                    <td class="pr-2 py-1">HSK 4</td>
                    <td>Средний (1200 слов)</td>
                  </tr>
                  <tr>
                    <td class="pr-2 py-1">HSK 5</td>
                    <td>Продвинутый (2500 слов)</td>
                  </tr>
                  <tr>
                    <td class="pr-2 py-1">HSK 6</td>
                    <td>Высший (5000+ слов)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-md p-4 flex flex-col justify-center">
              <h4 class="font-semibold mb-2">Подготовка к HSK</h4>
              <p class="text-sm">Многие университеты предлагают годичные подготовительные языковые курсы для студентов, которые еще не достигли необходимого уровня HSK.</p>
              <p class="text-sm mt-2">Эти курсы позволяют вам начать обучение в Китае, одновременно улучшая свои языковые навыки перед поступлением на основную программу.</p>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Программы на английском языке</h3>
          
          <p>Для программ, преподаваемых на английском языке, обычно требуется подтверждение владения английским языком. Принимаются следующие тесты:</p>
          
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li><strong>TOEFL:</strong> обычно минимум 80-90 баллов (iBT)</li>
            <li><strong>IELTS:</strong> обычно минимум 6.0-6.5 баллов</li>
          </ul>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <p class="font-medium">Совет:</p>
            <p class="text-sm">Даже обучаясь на программе на английском языке, постарайтесь изучать китайский. Это значительно обогатит ваш опыт проживания в Китае и откроет дополнительные карьерные возможности.</p>
          </div>
        `
      },
      {
        id: "scholarships",
        title: "Стипендии и финансирование",
        content: `
          <p>Одним из главных преимуществ обучения в Китае является наличие различных стипендиальных программ для иностранных студентов.</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Стипендия Китайского правительства (CGS)</h3>
          
          <p>Это наиболее щедрая и престижная стипендия, включающая:</p>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Полное освобождение от платы за обучение</li>
            <li>Бесплатное проживание в университетском общежитии</li>
            <li>Ежемесячная стипендия (от 3,000 до 3,500 юаней в зависимости от уровня образования)</li>
            <li>Комплексная медицинская страховка</li>
          </ul>
          
          <div class="my-6">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Студенты в библиотеке" class="rounded-xl shadow-md w-full" />
            <p class="text-sm text-center text-gray-500 mt-2">Библиотека Шанхайского университета Цзяо Тун</p>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Университетские стипендии</h3>
          
          <p>Многие китайские университеты предлагают собственные стипендии для иностранных студентов. Эти стипендии могут покрывать полную или частичную стоимость обучения.</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Региональные стипендии</h3>
          
          <p>Различные провинции и муниципалитеты Китая также предлагают свои стипендиальные программы. Например:</p>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Стипендия правительства Пекина</li>
            <li>Стипендия правительства Шанхая</li>
            <li>Стипендия провинции Цзянсу</li>
          </ul>
          
          <div class="bg-indigo-50 rounded-xl p-5 my-6 border border-indigo-100">
            <h4 class="font-bold text-indigo-800 mb-2">Как повысить шансы на получение стипендии</h4>
            <ol class="space-y-2 list-decimal pl-5">
              <li>Подавайте заявку заранее — конкуренция высока, особенно для CGS</li>
              <li>Имейте высокие академические достижения</li>
              <li>Уделите особое внимание мотивационному письму</li>
              <li>Получите сильные рекомендательные письма</li>
              <li>Четко опишите свои исследовательские интересы (особенно для магистратуры и докторантуры)</li>
              <li>Продемонстрируйте интерес к китайской культуре и языку</li>
            </ol>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Другие способы финансирования</h3>
          
          <p>Помимо стипендий, рассмотрите следующие варианты:</p>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Стипендии от правительства вашей страны для обучения за рубежом</li>
            <li>Международные образовательные гранты</li>
            <li>Работа преподавателем английского языка с частичной занятостью (с соответствующим разрешением)</li>
          </ul>
        `
      },
      {
        id: "living-in-china",
        title: "Жизнь в Китае",
        content: `
          <h3 class="text-xl font-semibold mb-4">Проживание</h3>
          
          <p>У иностранных студентов есть два основных варианта проживания:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"></path><path d="M18 4H6a2 2 0 0 0-2 2v3h16V6a2 2 0 0 0-2-2z"></path></svg>
              </div>
              <div class="p-4">
                <h4 class="font-bold mb-2">Университетское общежитие</h4>
                <ul class="text-sm space-y-1">
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Доступная стоимость (800-1,500 юаней/месяц)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Близкое расположение к учебным корпусам</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Общение с другими студентами</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500 mt-1 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span>Обычно базовые условия</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500 mt-1 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span>Меньше личного пространства</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="h-40 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div class="p-4">
                <h4 class="font-bold mb-2">Аренда квартиры</h4>
                <ul class="text-sm space-y-1">
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Больше личного пространства</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Лучшие условия проживания</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Погружение в местную жизнь</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500 mt-1 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span>Выше стоимость (2,500+ юаней/месяц)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500 mt-1 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span>Языковой барьер при общении с арендодателем</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Стоимость жизни</h3>
          
          <p>Стоимость жизни в Китае значительно варьируется в зависимости от города. В крупных городах, таких как Пекин, Шанхай и Шэньчжэнь, цены выше, чем в менее развитых регионах.</p>
          
          <div class="bg-white rounded-xl shadow-sm p-4 my-6 border border-gray-200">
            <h4 class="font-semibold mb-3 text-blue-700">Примерные ежемесячные расходы (в юанях)</h4>
            <table class="w-full text-sm">
              <thead class="bg-blue-50">
                <tr>
                  <th class="text-left p-2">Категория</th>
                  <th class="text-center p-2">Крупные города</th>
                  <th class="text-center p-2">Средние города</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-2">Жилье (общежитие)</td>
                  <td class="text-center p-2">800-1,500</td>
                  <td class="text-center p-2">600-1,000</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2">Аренда квартиры (1 комната)</td>
                  <td class="text-center p-2">3,000-6,000</td>
                  <td class="text-center p-2">1,500-3,000</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2">Питание</td>
                  <td class="text-center p-2">1,500-2,500</td>
                  <td class="text-center p-2">1,000-1,800</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2">Транспорт</td>
                  <td class="text-center p-2">300-500</td>
                  <td class="text-center p-2">200-400</td>
                </tr>
                <tr>
                  <td class="p-2">Связь (телефон, интернет)</td>
                  <td class="text-center p-2">200-300</td>
                  <td class="text-center p-2">150-250</td>
                </tr>
              </tbody>
              <tfoot class="bg-blue-50 font-medium">
                <tr>
                  <td class="p-2">Итого (примерно)</td>
                  <td class="text-center p-2">2,800-4,800</td>
                  <td class="text-center p-2">1,950-3,450</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <p>Для сравнения: 1 юань ≈ 0.15 долларов США (курс может меняться).</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Здравоохранение</h3>
          
          <p>Все иностранные студенты в Китае обязаны иметь медицинскую страховку. Если вы получаете стипендию CSC, страховка включена. В противном случае, вам необходимо приобрести студенческую медицинскую страховку, стоимость которой составляет около 400-800 юаней в год.</p>
          
          <p>В крупных городах есть международные клиники с англоговорящим персоналом, но они значительно дороже обычных китайских больниц.</p>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <p class="font-medium">Совет по здоровью:</p>
            <p class="text-sm">Сохраните контакты международной клиники в вашем городе на случай экстренной ситуации. Также полезно знать базовые медицинские термины на китайском языке.</p>
          </div>
        `
      },
      {
        id: "cultural-adaptation",
        title: "Культурная адаптация",
        content: `
          <p>Жизнь в Китае предлагает уникальный культурный опыт, но также может представлять определенные трудности для иностранных студентов. Вот несколько аспектов, о которых стоит знать:</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Культурный шок</h3>
          
          <p>Многие иностранные студенты проходят через несколько этапов адаптации:</p>
          <ol class="list-decimal pl-5 space-y-2 mt-2">
            <li><strong>Медовый месяц:</strong> начальное возбуждение и очарование новой культурой</li>
            <li><strong>Негативизм:</strong> разочарование, фрустрация и тоска по дому</li>
            <li><strong>Адаптация:</strong> постепенное принятие и понимание культурных различий</li>
            <li><strong>Интеграция:</strong> комфортное существование в новой культуре</li>
          </ol>
          
          <div class="my-6">
            <img src="https://images.unsplash.com/photo-1534884473905-88b9a7b489e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Традиционный китайский храм" class="rounded-xl shadow-md w-full" />
            <p class="text-sm text-center text-gray-500 mt-2">Традиционная китайская архитектура сочетается с современными небоскребами в крупных городах</p>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Советы по адаптации</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="bg-white rounded-xl shadow-sm p-4 border border-blue-100">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><polyline points="12 8 12 12 14 14"></polyline><path d="M3.05 11a9 9 0 1 1 .5 4m-.5-4v4h4"></path></svg>
              </div>
              <h4 class="font-semibold mb-2">Будьте терпеливы</h4>
              <p class="text-sm">Адаптация требует времени. Дайте себе возможность постепенно привыкнуть к новой среде.</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-4 border border-purple-100">
              <div class="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4 class="font-semibold mb-2">Общайтесь</h4>
              <p class="text-sm">Заводите друзей среди местных студентов и других иностранцев. Участвуйте в студенческих мероприятиях.</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-4 border border-green-100">
              <div class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h4 class="font-semibold mb-2">Изучайте язык</h4>
              <p class="text-sm">Даже базовые знания китайского значительно облегчат вашу повседневную жизнь и расширят возможности.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="bg-white rounded-xl shadow-sm p-4 border border-yellow-100">
              <div class="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              </div>
              <h4 class="font-semibold mb-2">Будьте открыты</h4>
              <p class="text-sm">Принимайте новый опыт с интересом. Пробуйте местную кухню, участвуйте в традиционных праздниках.</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-4 border border-red-100">
              <div class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>
              <h4 class="font-semibold mb-2">Наблюдайте</h4>
              <p class="text-sm">Обращайте внимание на поведение местных жителей и старайтесь понять социальные нормы и ожидания.</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-4 border border-indigo-100">
              <div class="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path><circle cx="12" cy="10" r="3"></circle><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <h4 class="font-semibold mb-2">Сохраняйте связь</h4>
              <p class="text-sm">Регулярно общайтесь с семьей и друзьями дома, чтобы уменьшить чувство изоляции.</p>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Культурные особенности</h3>
          
          <p>Несколько важных культурных аспектов, которые полезно знать:</p>
          
          <ul class="list-disc pl-5 space-y-3 mt-4">
            <li><strong>Концепция "лица" (面子, miànzi):</strong> В китайской культуре очень важно "сохранять лицо" (не терять уважение) и "давать лицо" (оказывать уважение). Публичная критика или смущение могут привести к "потере лица".</li>
            <li><strong>Косвенная коммуникация:</strong> Китайцы часто избегают прямых "нет" и могут давать уклончивые ответы, чтобы сохранить гармонию.</li>
            <li><strong>Иерархия и уважение:</strong> Уважение к старшим и людям с более высоким статусом очень важно.</li>
            <li><strong>Коллективизм:</strong> Групповые интересы часто ставятся выше индивидуальных.</li>
          </ul>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
            <p class="font-medium">Культурный совет:</p>
            <p class="text-sm">Не принимайте культурные различия личностно. То, что может показаться грубым или странным, часто просто отражает разные социальные нормы и ожидания.</p>
          </div>
        `
      },
      {
        id: "career-opportunities",
        title: "Карьерные возможности",
        content: `
          <p>Обучение в Китае открывает множество карьерных перспектив как в самом Китае, так и на глобальном рынке труда.</p>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Работа в Китае после окончания учебы</h3>
          
          <p>Китай предлагает различные возможности для иностранных выпускников:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <h4 class="font-semibold text-blue-800 mb-2">Рабочая виза (Z-виза)</h4>
              <p class="text-sm">Для получения рабочей визы необходимо:</p>
              <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                <li>Иметь степень бакалавра или выше</li>
                <li>Иметь не менее 2 лет соответствующего опыта работы</li>
                <li>Получить предложение о работе от китайской компании</li>
              </ul>
              <p class="text-sm mt-3">Примечание: Выпускники ведущих китайских университетов могут претендовать на получение рабочей визы сразу после окончания учебы, без требования опыта работы.</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
              <h4 class="font-semibold text-purple-800 mb-2">Стартап-виза</h4>
              <p class="text-sm">В некоторых технологических хабах, таких как Шэньчжэнь и Ханчжоу, есть специальные визовые программы для иностранных предпринимателей.</p>
              <p class="text-sm mt-3">Эти программы предлагают упрощенный процесс получения разрешения на работу и часто включают инкубационную поддержку для стартапов.</p>
              <p class="text-sm mt-3">Это отличная возможность для тех, кто хочет начать бизнес, связанный с китайским рынком или производством.</p>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Востребованные профессии</h3>
          
          <p>Наиболее востребованные направления для иностранных специалистов в Китае:</p>
          
          <div class="my-6 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="group bg-white rounded-xl shadow-sm border border-blue-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <h4 class="font-semibold">IT и технологии</h4>
                </div>
                <p class="text-sm text-gray-600">Разработчики ПО, AI-специалисты, data scientists, UX/UI дизайнеры, продакт-менеджеры</p>
              </div>
              
              <div class="group bg-white rounded-xl shadow-sm border border-green-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M3 22V12C3 9.87827 3.84285 7.84344 5.34315 6.34315C6.84344 4.84285 8.87827 4 11 4C13.1217 4 15.1566 4.84285 16.6569 6.34315C18.1571 7.84344 19 9.87827 19 12V22"></path><path d="M21 22H1"></path><path d="M16 9C16 9 14.5 8 12 8C9.5 8 8 9 8 9"></path></svg>
                  </div>
                  <h4 class="font-semibold">Образование</h4>
                </div>
                <p class="text-sm text-gray-600">Преподаватели английского и других иностранных языков, международные тренеры, академические исследователи</p>
              </div>
              
              <div class="group bg-white rounded-xl shadow-sm border border-purple-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h4 class="font-semibold">Бизнес</h4>
                </div>
                <p class="text-sm text-gray-600">Менеджеры по международным отношениям, специалисты по маркетингу, финансовые аналитики, консультанты</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div class="group bg-white rounded-xl shadow-sm border border-yellow-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path><polygon points="10 15 15 12 10 9"></polygon></svg>
                  </div>
                  <h4 class="font-semibold">Медиа и креатив</h4>
                </div>
                <p class="text-sm text-gray-600">Создатели контента, журналисты, копирайтеры, переводчики, актеры, режиссеры рекламы</p>
              </div>
              
              <div class="group bg-white rounded-xl shadow-sm border border-red-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                  </div>
                  <h4 class="font-semibold">Инженерия</h4>
                </div>
                <p class="text-sm text-gray-600">Инженеры-механики, инженеры-электрики, специалисты по автоматизации, инженеры по охране окружающей среды</p>
              </div>
              
              <div class="group bg-white rounded-xl shadow-sm border border-indigo-100 p-4 hover:shadow-md transition-all duration-300">
                <div class="flex items-center mb-3">
                  <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  </div>
                  <h4 class="font-semibold">Здравоохранение</h4>
                </div>
                <p class="text-sm text-gray-600">Врачи в международных клиниках, медицинские исследователи, специалисты по биотехнологиям</p>
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 mt-6">Глобальные перспективы</h3>
          
          <p>Опыт обучения в Китае высоко ценится и на международном рынке труда:</p>
          
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Международные компании с офисами в Китае</strong> часто ищут сотрудников, знакомых с китайской культурой и бизнес-средой.</li>
            <li><strong>Компании, работающие с китайскими партнерами</strong>, нуждаются в специалистах, понимающих особенности ведения бизнеса в Китае.</li>
            <li><strong>Дипломатические и государственные структуры</strong> заинтересованы в экспертах по Китаю для развития двусторонних отношений.</li>
          </ul>
          
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 my-6 shadow-md">
            <h4 class="font-bold text-xl mb-4">Ключевое преимущество</h4>
            <p>Выпускники китайских университетов обладают уникальным набором навыков и опыта: понимание восточной и западной культур, языковые навыки, опыт адаптации и международного общения.</p>
            <p class="mt-3">Это делает их ценными специалистами в глобализированной экономике, где Китай играет все более важную роль.</p>
          </div>
        `
      },
      {
        id: "conclusion",
        title: "Заключение",
        content: `
          <p class="lead">Обучение в Китае – это не просто получение диплома, это комплексный опыт, который может изменить вашу жизнь и карьерные перспективы.</p>
          
          <p>Китай предлагает качественное образование по доступной цене, большое количество стипендиальных программ, возможность погружения в одну из древнейших культур мира и перспективы для будущей карьеры как в Китае, так и за его пределами.</p>
          
          <p>Конечно, как и любой опыт обучения за рубежом, учеба в Китае сопряжена с определенными вызовами: языковым барьером, культурными различиями, адаптацией к новой образовательной системе. Однако преодоление этих трудностей – это также ценный опыт, развивающий гибкость мышления, межкультурную компетентность и способность адаптироваться к новым ситуациям.</p>
          
          <div class="bg-blue-50 rounded-xl p-6 my-6 border border-blue-100">
            <h4 class="font-bold text-blue-800 mb-3">Ключевые выводы</h4>
            <ul class="space-y-2">
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Китай предлагает качественное и доступное образование с разнообразными программами на английском и китайском языках.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Многочисленные стипендии делают обучение в Китае финансово доступным для иностранных студентов.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Жизнь в Китае предлагает уникальное культурное погружение и развивает ценные межкультурные навыки.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Знание китайского языка и понимание китайской культуры становятся все более ценными навыками на глобальном рынке труда.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Выпускники китайских университетов имеют преимущества как в карьере в Китае, так и на международном уровне.</span>
              </li>
            </ul>
          </div>
          
          <p>Если вы рассматриваете возможность обучения за рубежом, Китай определенно заслуживает вашего внимания. Это направление предлагает уникальное сочетание традиционного и современного, восточного и западного, академического и культурного опыта.</p>
          
          <p>Независимо от того, выберете ли вы обучение в шумном Шанхае, историческом Пекине, технологическом Шэньчжэне или одном из менее известных, но не менее интересных городов Китая, вас ждет увлекательное путешествие, которое расширит ваши горизонты и откроет новые возможности.</p>
          
          <div class="my-6">
            <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Выпускники университета в Китае" class="rounded-xl shadow-md w-full" />
            <p class="text-sm text-center text-gray-500 mt-2">Церемония вручения дипломов в китайском университете</p>
          </div>
          
          <p class="text-center italic mt-8">"Образование – это не подготовка к жизни; образование – это сама жизнь." — Джон Дьюи</p>
        `
      }
    ]
  }
];

export const getArticleBySlug = (slug: string): Article => {
  const article = articles.find(article => article.slug === slug);
  if (!article) {
    throw new Error(`Article with slug "${slug}" not found`);
  }
  return article;
};

export const getSectionById = (article: Article, sectionId: string): ArticleSection | undefined => {
  for (const section of article.sections) {
    if (section.id === sectionId) {
      return section;
    }
    if (section.subsections) {
      const subsection = section.subsections.find(sub => sub.id === sectionId);
      if (subsection) {
        return subsection;
      }
    }
  }
  return undefined;
};
