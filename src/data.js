const data = {
	info: {
		name: 'Самур',
		surname: 'Гафуров',
		phone: '+7 (928) 679-16-10',
		gmail: 'qsamur@gmail.com',
		telegram: 'qafurov',
		gitHub: 'Samur000',
		country: 'Дагестан',
		city: 'Махачкала',
		age: 19,
		jobName: 'Frontend',
		skills: [
			{
				name: 'HTML',
				level: 10,
			},
			{
				name: 'CSS',
				level: 10,
			}, {
				name: 'SCSS / Sass',
				level: 8,
			}, {
				name: 'JavaScript',
				level: 9,
			}, {
				name: 'TypeScript',
				level: 8,
			}, {
				name: 'NodeJS',
				level: 7,
			}, {
				name: 'React',
				level: 9,
			}, {
				name: 'Next.js',
				level: 8,
			}, {
				name: 'Redux',
				level: 7,
			}, {
				name: 'Bootstrap',
				level: 9,
			}, {
				name: 'React-Bootstrap',
				level: 9,
			},
		],
		edu: {
				name: 'Дагестанский Государственный Университет (ДГУ)',
				faculty: 'Информатикии и Информационных Систем',
				direction: 'Информационные Системы и Технологии',
				admissionYear: 2020,
				graduationYear: 2024,
			},
		job: [
			{
				companyName: 'Projects Lab',
				jobName: 'Frontend React Developer',
				stack: ['React', 'TypeScript', 'Styled-Components', 'React Bootstrap'],
				durationMonth: '6 месяцев',
				startData: {
					year: '2023',
					month: 'Июнь',
				},
				endData: {
					year: '2023',
					month: 'Ноябрь',
				},
				desc: {
					situation: 'перед нашей командой стояла задача разработать онлайн сервис для удобного бронирования услуг.',
					task: 'разработка интерфейса данного сервиса для взаимодействия с бэеэнд чаастью приложения.',
					actions: [
						'Выбрал стэк: React, React-Bootstrap, styled-components, TS, React-calendar.',
						'Создавал компоненты TSX и прописывал логику для быстрого и безопасного взаимодействия с API',
						'Взаимодействовал с REST API для получения и вывода данных на страницу, также для получения и отправки данных на сервер.',
						'Работал с GIT в команде',
						'Участвовал в ежедневных созвонах',
						'Работали по AGILE SCRUM',
					],
					result: 'в итоге моей работы было получено безопасное и адаптивное веб приложение, обеспечивающее удобное и безопасное бронирование услуг.',
				},
			},
			{
				companyName: 'Фриланс',
				jobName: 'Верстальшик',
				stack: [
					'HTML',
					'CSS',
					'JavaScript'
				],
				durationMonth: '5 месяцев',
				startData: {
					year: '2023',
					month: 'Январь',
				},
				endData: {
					year: '2023',
					month: 'Май',
				},
				desc: {
					situation: 'нужен интерфейс сайта для взаимодействия с API',
					task: 'сверстать страницы кроссбраузерно и адаптивно с динамикой',
					actions: [
						'Сверстал страницы на чистом HTML + CSS',
						'Реализовал динамику страницы на нативном JavaScript',
						'Переместил верстку в php файлы',
						'Сотрудничал с коллегами, для гарантирования согласованности и стабильной работы системы'
					],
					result: 'моя работа привела к созданию эффективной верстки сайта https://www.dagavtogid.ru обеспечивающее надежное взаимодействие с бэкенд частью. Проект был удачно завершен.',
				},
			},
			{
				companyName: 'Фриланс',
				jobName: 'Fullstack-разработчик',
				stack: [
					'HTML',
					'CSS',
					'JavaScript',
					'Bootstrap',
					'jQuery',
					'PHP'
				],
				durationMonth: '4 месяца',
				startData: {
					year: '2022',
					month: 'Июнь ',
				},
				endData: {
					year: '2022',
					month: 'Сентьябрь ',
				},
				desc: {
					situation: 'для компании по производству и продаже сэндвич панелей нужен сайт для продвижения бизнеса.',
					task: 'разработать многостраничный сайт который будет продвигать услуги и бизнес. И опубликовать сайт на платформе Яндекс Директ для рекламы сайта.',
					actions: [
						'Разработал сайт на: Html + Css + Js + Bootstrap 5',
						'Реализовал отправку формы на почту на языке PHP',
						'Разместил сайт на хостинг',
						'Занимался рекламой сайта на платформе Яндекс директ'
					],
					result: 'в одиночку разработал сайт который привлекала клиентов. Проект был успешно завершен и заказчик остался доволен.\n',
				},
			},
		],
	},
	projects: [
		{
			id: 1,
			title: 'Эра сталь',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/01.jpg',
			url: 'https://samur000.github.io/StalEra/',
			des: {
				stack: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP'],
				text: 'Сайт для компании по производству и продаже сэндвич панелей и металлоконструкции',
			},
		},
		{
			id: 2,
			title: 'Слайдер',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/02.jpg',
			url: 'https://samur000.github.io/gallery/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Креативный слайдер для просмотра фотографий',
			},
		},
		{
			id: 3,
			title: 'Слайдер',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/03.jpg',
			url: 'https://samur000.github.io/slider/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Слайдер переключающийся как при клике на кнопки так и при нажатии клавищ верх и вниз',
			},
		},
		{
			id: 4,
			title: 'Игра антистресс',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/04.jpg',
			url: 'https://samur000.github.io/miniCursorGame/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Мини игра антистресс. Квадратики меняют цвет рандомно при наведении курсора',
			},
		},
		{
			id: 5,
			title: 'Генератор цветов',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/05.jpg',
			url: 'https://samur000.github.io/color-selection/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Отличный сервис для выбора разнвх цветов лдя дизайнеров. Цвета переключаются при нажатии клавищи ' +
					'пробел. Также можно блокировать понравивщийся цвет и пролистать дальше.',
			},
		},
		{
			id: 6,
			title: 'Aim game',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/06.jpg',
			url: 'https://samur000.github.io/aim-game/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Игра Aim Game, прокачает внимательность нажатия на определенную точку на экране',
			},
		},
		{
			id: 7,
			title: 'White keepers',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/07.jpg',
			url: '!#',
			des: {
				stack: ['React', 'TypeScript', 'Redux'],
				text: 'Сайт компании занимающийся кибербезопасностью и защитой информвционных систем',
			},
		},
		{
			id: 8,
			title: 'ДагАвтоГид',
			img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/08.jpg',
			url: 'https://dagavtogid.ru/tours/mnogodnevnye/adat-trevel-gunib-chokh-gamsutl-2-dnya/',
			des: {
				stack: ['Html', 'Css', 'JavaScript'],
				text: 'Сайт тур компании. В разработке данного проекта я учавствовал в роли верстальщика',
			},
		},
	],
}

export default data
