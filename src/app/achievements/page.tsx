import { Background } from "@/components/general/background";
import { Navigator } from "@/components/general/navigator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const achievements = [
	{
		title: "Won Best Use of Google Cloud at CruzHacks 2020",
		description: "Won Best Use of Google Cloud at CruzHacks 2020 with AmberDash, which is an app that users can put on their dash when an Amber alert is received. The app then scans license plates automatically and send an alert to the police if a match to an Amber alert is found",
	},
	{
		title: "3rd Place in ACM Hackathon 2019",
		description: "Won 3rd place with UCSC class search Alexa skill, which allowed students to ask Alexa about information relating to classes at UCSC.",
		links: ['https://github.com/jonnekaunisto/Pisa-Class-Search', 'https://devpost.com/software/slug-search']
	},
	{
		title: "Deans Honors",
		description: "Received Dean's Honors during 4 quarters at UCSC for attaining a certain GPA threshold during each quarter.",
		links: ['https://honors.ucsc.edu/honors-programs/deans-honors/winter-2018.html', 'https://honors.ucsc.edu/honors-programs/deans-honors/fall-2018.html', 'https://honors.ucsc.edu/honors-programs/deans-honors/winter-2019.html', 'https://honors.ucsc.edu/honors-programs/deans-honors/spring-2019.html']
	},
];
export default function Home() {
	return (
		<Background>
			<Navigator></Navigator>
			<div className="flex mt-10 justify-center items-center" >
				<div className="w-200 bg-white rounded-lg font-alumni text-2xl" >
					<h1 className="text-center text-3xl font-bold mt-4">Achievements</h1>
					<hr className="w-9/10 mx-auto border-t border-gray-300"></hr>
					{achievements.map(achievement => (
							<div className="m-5" id={achievement.title} key={achievement.title}>
								<h2 className="text-center font-bold">{achievement.title}</h2>
								<p className="mx-10">{achievement.description}</p>
								<ul className="icons flex justify-center gap-4">
									{achievement.links && achievement.links.map((link, index) => (
										<Link href={link} key={index}>
											{link.includes('github') ? 
												<FaGithub className="size-12 fill-gray-300 hover:fill-red-300" />
												:
												<IoIosInformationCircleOutline className="size-12 fill-gray-300 hover:fill-purple-300" />
											}
										</Link>
									))}
								</ul>
							</div>
					))}
				</div>
			</div>
		</Background>
	);
}
