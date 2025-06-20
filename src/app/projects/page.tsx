import { Background } from "@/components/general/background";
import { Navigator } from "@/components/general/navigator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const projects = [
    {
        title: "Highlight Video Generator",
        description: "Generates videos from daily or weekly highlights for video games such as Overwatch and Counter Strike for people to watch. Highlights from Reddit and Twitch are filtered for their quality and rendered it to a video with transitions. Optionally the videos can also be uploaded to a YouTube channel for people to enjoy.",
    },
    {
        title: "Simple YouTube API",
        description: "Simple YouTube API is a YouTube API wrapper that supports uploading, fetching and updating videos. Other features are also supported such as channels and comments with more on the way.",
        links: ['https://github.com/jonnekaunisto/simple-youtube-api', 'https://simple-youtube-api.readthedocs.io/'],
    },
    {
        title: "UCSC Buses Alexa Skill",
        description: "UCSC Buses is an Alexa skill that lets students ask Alexa when the next bus is coming to a stop near their dorm.",
        links: ['https://github.com/jonnekaunisto/UCSC-Buses-Amazon-Alexa-Bot', 'https://www.amazon.com/Jonne-Kaunisto-UCSC-Buses/dp/B07MZPCWLB/'],
    },
];

export default function Home() {
	return (
		<Background>
			<Navigator></Navigator>
			<div className="flex mt-10 justify-center items-center" >
				<div className="w-200 bg-white rounded-lg font-alumni text-2xl" >
					<h1 className="text-center text-3xl font-bold mt-4">Projects</h1>
					<hr className="w-9/10 mx-auto border-t border-gray-300"></hr>
					{projects.map(achievement => (
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
