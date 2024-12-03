const courses = [
	{
		image: './public/course1.jpg',
		title: 'Web Development',
		description: 'Learn HTML, CSS, and JavaScript to build responsive websites from scratch.',
	},
	{
		image: './public/course2.jpg',
		title: 'Data Science',
		description: 'Master data analysis, visualization, and machine learning techniques to extract insights from data.',
	},
	{
		image: './public/course3.jpg',
		title: 'Digital Marketing',
		description: 'Explore the fundamentals of SEO, social media marketing, and analytics to boost online presence.',
	},
	{
		image: './public/course4.jpg',
		title: 'Graphic Design',
		description: 'Learn the principles of design, typography, and branding to create stunning visual content.',
	},
	{
		image: './public/course5.jpg',
		title: 'Cybersecurity',
		description: 'Understand the essentials of cybersecurity, including threat detection, prevention, and response strategies.',
	},
	{
		image: './public/course6.jpg',
		title: 'Project Management',
		description: 'Learn how to effectively plan, execute, and manage projects using industry-standard methodologies.',
	},
	{
		image: './public/course7.jpg',
		title: 'Artificial Intelligence',
		description: 'Dive into AI concepts, machine learning algorithms, and their applications in various industries.',
	},
	{
		image: './public/course8.jpg',
		title: 'Cloud Computing',
		description: 'Learn about cloud service models, deployment strategies, and how to leverage cloud technologies.',
	},
	{
		image: './public/course9.jpg',
		title: 'Mobile App Development',
		description: 'Discover how to design and develop applications for iOS and Android platforms using popular frameworks.',
	},
	{
		image: './public/course10.jpg',
		title: 'Content Writing',
		description: 'Enhance your writing skills and learn how to create engaging content for digital platforms.',
	},
	{
		image: './public/course11.jpg',
		title: 'Finance and Investment',
		description: 'Understand the principles of finance, investment strategies, and how to manage personal wealth effectively.',
	},
	{
		image: './public/course12.jpg',
		title: 'Photography',
		description: 'Learn the art of photography, from composition to editing, to capture stunning images.',
	}
];


courses.sort((a, b) => {
	if (a.title.toLowerCase() < b.title.toLowerCase()) {
		return -1;
	} else if (a.title.toLowerCase() > b.title.toLowerCase()) {
		return 1;
	} else {
		return 0; 1
	}
});



const courseContainer = document.getElementById('courses-container');

courses.forEach(course => {
	const courseCard = document.createElement('div');
	courseCard.classList.add('course-card');

	courseCard.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.description}</p>   

    <div class="spring"></div>
    <button class="primary">Enroll Now</button>
  `;

	courseContainer.appendChild(courseCard);
});

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent default form submission   


	const query = document.querySelector('input[name="query"]').value;

	// Perform search logic here, e.g., filter the courses array
	const filteredCourses = courses.filter(course => {
		return course.title.toLowerCase().includes(query.toLowerCase()) ||
			course.description.toLowerCase().includes(query.toLowerCase());
	});

	courseContainer.innerHTML = ''
	filteredCourses.forEach(course => {
		const courseCard = document.createElement('div');
		courseCard.classList.add('course-card');

		courseCard.innerHTML = `
			<img src="${course.image}" alt="${course.title}">
			<h3>${course.title}</h3>
			<p>${course.description}</p>   
	
			<div class="spring"></div>
			<button class="primary">Enroll Now</button>
		`;

		courseContainer.appendChild(courseCard);
	});

	// Update the UI to display the filtered courses
	// ... (e.g., using a templating engine or DOM manipulation)

	console.log('Search query:', query);
	console.log('Filtered courses:', filteredCourses);
});