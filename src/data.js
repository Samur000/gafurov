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
			}, {
				name: 'CSS',
				level: 10,
			}, {
				name: 'SCSS / Sass',
				level: 10,
			}, {
				name: 'jQuery',
				level: 8,
			}, {
				name: 'JavaScript',
				level: 9,
			}, {
				name: 'TypeScript',
				level: 8,
			}, {
				name: 'React',
				level: 9,
			}, {
				name: 'Swelte',
				level: 7,
			}, {
				name: 'REST API',
				level: 9,
			}, {
				name: 'Git',
				level: 8,
			}, {
				name: 'NodeJS',
				level: 7,
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
			}],
		edu: {
			name: 'Дагестанский Государственный Университет (ДГУ)',
			faculty: 'Информатикии и Информационных Технологий',
			direction: 'Информационные Системы и Технологии',
			admissionYear: 2020,
			graduationYear: 2024,
		},
		job: [
			{
				companyName: 'Projects Lab',
				jobName: 'Frontend React Developer',
				stack: ['React', 'TypeScript', 'Styled-Components', 'React Bootstrap'],
				durationMonth: '9 месяцев',
				desc: {
					situation: 'перед нашей командой стояла задача разработать онлайн сервис для удобного бронирования услуг.',
					task: 'Разработка онлайн-платформы для записи на разные косметологические услуги',
					actions: ['Технологии: React, TypeScript, React-Bootstrap, Styled-Components, React-Calendar, JWT, PrivateRouter', 'Обязанности: разработка Frontend части приложения, участие в проектировании и разработке архитектуры клиентской части, коммуникация с заказчиками, реализация регистрации. авторизации и аутентификации пользователей и.др'],
					result: 'в итоге моей работы было получено безопасное и адаптивное веб приложение, обеспечивающее удобное и безопасное бронирование услуг.',
				},
			}, {
				companyName: 'Cron',
				jobName: 'Frontend-разработчик',
				stack: ['HTML', 'CSS', 'JavaScript'],
				durationMonth: '6 месяцев',
				desc: {
					situation: 'нужен интерфейс сайта для взаимодействия с API',
					task: 'Разработка сайта для тур агентства ДагАвтоГид',
					actions: ['Технологии: Html, Css, JavaScript, Figma', 'Обязанности: верстка страниц адаптивно и отзывчиво согласно по макету, размещении кода на php файла для SSR, активное участие в ежедневных созвонах и в создании новых фич'],
					result: 'моя работа привела к созданию эффективной верстки сайта https://www.dagavtogid.ru обеспечивающее надежное взаимодействие с бэкенд частью. Проект был удачно завершен.',
				},
			}, {
				companyName: 'Эра Сталь',
				jobName: 'Frontend-разработчик',
				stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP'],
				durationMonth: '4 месяца',
				desc: {
					situation: 'для компании по производству и продаже сэндвич панелей нужен сайт для продвижения бизнеса.',
					task: 'Разработка полноценного многостраничного сайта для компании по производству и продаже сэндвич панелей',
					actions: ['Технологии: Html, Css, JavaScript, jQuery, Bootstrap, PHP', 'Обязанности: верстка страниц, реализация динамики, реализация отправки формы на почту, хостинг сайта, получение сертификата для HTTPS соединения, SEO оптимизация сайта и продвижение на Яндекс директ'],
					result: 'в одиночку разработал сайт который привлекала клиентов. Проект был успешно завершен и заказчик остался доволен.',
				},
			}],
	},
	projects: [{
		id: 1,
		title: 'Эра сталь',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/01.jpg',
		url: 'https://samur000.github.io/StalEra/',
		des: {
			stack: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP'],
			text: 'Сайт для компании по производству и продаже сэндвич панелей и металлоконструкции',
		},
	}, {
		id: 2,
		title: 'White keepers',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/07.jpg',
		url: '',
		des: {
			stack: ['React', 'TypeScript', 'Redux'],
			text: 'Сайт компании занимающийся кибербезопасностью и защитой информвционных систем',
		},
	}, {
		id: 3,
		title: 'ДагАвтоГид',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/08.jpg',
		url: 'https://dagavtogid.ru/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Сайт тур компании. В разработке данного проекта я учавствовал в роли верстальщика',
		},
	}, {
		id: 4,
		title: 'Слайдер',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/02.jpg',
		url: 'https://samur000.github.io/gallery/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Креативный слайдер для просмотра фотографий',
		},
	}, {
		id: 5,
		title: 'Слайдер',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/03.jpg',
		url: 'https://samur000.github.io/slider/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Слайдер переключающийся как при клике на кнопки так и при нажатии клавищ верх и вниз',
		},
	}, {
		id: 6,
		title: 'Игра антистресс',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/04.jpg',
		url: 'https://samur000.github.io/miniCursorGame/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Мини игра антистресс. Квадратики меняют цвет рандомно при наведении курсора',
		},
	}, {
		id: 7,
		title: 'Генератор цветов',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/05.jpg',
		url: 'https://samur000.github.io/color-selection/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Отличный сервис для выбора разнвх цветов лдя дизайнеров. Цвета переключаются при нажатии клавищи ' + 'пробел. Также можно блокировать понравивщийся цвет и пролистать дальше.',
		},
	}, {
		id: 8,
		title: 'Aim game',
		img: 'https://raw.githubusercontent.com/Samur000/props-profile-portfolio/main/06.jpg',
		url: 'https://samur000.github.io/aim-game/',
		des: {
			stack: ['Html', 'Css', 'JavaScript'],
			text: 'Игра Aim Game, прокачает внимательность нажатия на определенную точку на экране',
		},
	}],
}

export default data
