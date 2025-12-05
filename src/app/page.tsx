import { Background } from "@/components/general/background";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTrophy } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Home() {
	return (
		<Background>
			<div id="wrapper" className="h-screen flex items-center justify-center text-black">

				<section className="bg-white p-5 m-50 rounded-lg">
					<header>
						<span className="avatar flex items-center gap-4">
							<hr className="h-px w-30 bg-gray-300 border-0"></hr>
							<Image src="/Jonne.jpeg" width="150" height="150" alt="" className="rounded-full" />
							<hr className="h-px w-30 bg-gray-300 border-0"></hr>
						</span>
						<h1 className="text-5xl text-center font-alumni">Jonne Kaunisto</h1>
						<p className="text-2xl text-center font-alumni">Software Engineer | Peace Corps Volunteer</p>
					</header>

					<footer>
						<ul className="icons flex justify-center gap-4 mt-4">
							<Link href="https://github.com/jonnekaunisto">
								<FaGithub className="size-7 hover:fill-red-300" />
							</Link>
							<Link href="https://www.linkedin.com/in/jonnekaunisto/">
								<FaLinkedin className="size-7 hover:fill-blue-300" />
							</Link>
							<Link href="achievements">
								<FaTrophy className="size-7 hover:fill-green-300" />
							</Link>
							<Link href="projects">
								<IoIosInformationCircleOutline className="size-7 hover:fill-purple-300" />
							</Link>
						</ul>
					</footer>
				</section>
			</div>
		</Background>
	);
}
