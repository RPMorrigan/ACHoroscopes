const horoscopeData = {
	horoscopes: {
		date: "2023-11-30",
		astroSigns: [
			{
				sign: "Aries",
				dateRange: "March 21 - April 19",
				dailyHoroscope:
					"Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
				luckyNumbers: [3, 17, 21],
				key: 0,
				icon: "imgs/aries.svg"
			},
			{
				sign: "Taurus",
				dateRange: "April 20 - May 20",
				dailyHoroscope:
					"Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
				luckyNumbers: [5, 14, 29],
				key: 1,
				icon: "imgs/taurus.svg"
			},
			{
				sign: "Gemini",
				dateRange: "May 21 - June 20",
				dailyHoroscope:
					"Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
				luckyNumbers: [2, 16, 23],
				key: 2,
				icon: "imgs/gemini.svg"
			},
			{
				sign: "Cancer",
				dateRange: "June 21 - July 22",
				dailyHoroscope:
					"Embrace your creative side. Today is a perfect day for starting a new artistic project.",
				luckyNumbers: [7, 19, 25],
				key: 3,
				icon: "imgs/cancer.svg"
			},
			{
				sign: "Leo",
				dateRange: "July 23 - August 22",
				dailyHoroscope:
					"Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
				luckyNumbers: [1, 8, 22],
				key: 4,
				icon: "imgs/leo.svg"
			},
			{
				sign: "Virgo",
				dateRange: "August 23 - September 22",
				dailyHoroscope:
					"Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
				luckyNumbers: [4, 11, 26],
				key: 5,
				icon: "imgs/virgo.svg"
			},
			{
				sign: "Libra",
				dateRange: "September 23 - October 22",
				dailyHoroscope:
					"Seek balance in your life. Take time for yourself and focus on your personal well-being.",
				luckyNumbers: [6, 15, 24],
				key: 6,
				icon: "imgs/libra.svg"
			},
			{
				sign: "Scorpio",
				dateRange: "October 23 - November 21",
				dailyHoroscope:
					"A mystery may unfold today. Trust your intuition and follow where it leads.",
				luckyNumbers: [9, 18, 27],
				key: 7,
				icon: "imgs/scorpio.svg"
			},
			{
				sign: "Sagittarius",
				dateRange: "November 22 - December 21",
				dailyHoroscope:
					"Adventure calls to you. Embrace new experiences and open yourself to learning.",
				luckyNumbers: [3, 12, 21],
				key: 8,
				icon: "img/sagittarius.svg"
			},
			{
				sign: "Capricorn",
				dateRange: "December 22 - January 19",
				dailyHoroscope:
					"Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
				luckyNumbers: [8, 16, 23],
				key: 9,
				icon: "imgs/capricorn.svg"
			},
			{
				sign: "Aquarius",
				dateRange: "January 20 - February 18",
				dailyHoroscope:
					"Innovation is your theme today. Think outside the box and explore new ideas.",
				luckyNumbers: [5, 13, 20],
				key: 10,
				icon: "imgs/aquarius.svg"
			},
			{
				sign: "Pisces",
				dateRange: "February 19 - March 20",
				dailyHoroscope:
					"Your empathy will be a blessing to someone in need. Listen and offer your support.",
				luckyNumbers: [2, 10, 22],
				key: 11,
				icon: "imgs/pisces.svg"
			}
		]
	}
};

// variables for DOM manipulation
const myBody = document.querySelector("body");
const form = document.getElementById("zodiacForm");
const resultCard = document.getElementById("result-section")
const zImg = document.getElementById("zodiac-image");
const result = document.getElementById("results")
const result0 = document.getElementById("results0")
const resultTxt = document.getElementById("results-text");

// This variable will be assigned the appropriate index number to update the path from which we fetch our data
let signNum = 0;

// Easy accces to the horoscope data into simple variables
// This first line will take care of holding the path up to the final data object
// This makes it easier to read and write the code
let signPath = horoscopeData.horoscopes.astroSigns[signNum];
// You can see that I need only to call 'usrSign' then the rest of the path
let sign = signPath;
let range = signPath.dateRange;
let horoscope = signPath.dailyHoroscope;
let icon = signPath.icon;

// Template literal for the results section
const resultLit = `Your zodiac sign is ${sign}`;
const resultLit0 = `The date range for ${sign} is ${range}`;
const resultLit1 = `Your horoscope today is ${horoscope}`;

// Event listener for the form submission
form.addEventListener("submit", usrData);

// Fetches the form data. Re-assigns the value of 'signNum' then plugs it into our main data path
function usrData(e) {
	e.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());

	// Adds the dynamic conntent to it's appropriate container
	zImg.setAttribute("src", icon);
	result.textContent = resultLit;
	result0.textContent = resultLit0;
	resultTxt.textContent = resultLit1;

	// resultCard.classList.toggle("hidden");
}
