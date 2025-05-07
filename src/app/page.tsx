import Image from "next/image";
import { FaGithub, FaLinkedin, FaTrophy } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Home() {
	return (
		<div style={{
			background: 'linear-gradient(44deg,rgba(137, 98, 163, 1) 0%, rgba(242, 92, 92, 1) 50%, rgba(242, 182, 97, 1) 100%);',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			height: '100vh'
		}}>
			<div id="wrapper" className="h-screen flex items-center justify-center text-black">

				<section className="bg-white p-5 m-50 rounded-lg">
					<header>
						<span className="avatar flex items-center gap-4">
							<hr className="h-px w-30 bg-gray-300 border-0"></hr>
							<Image src="/Jonne.jpeg" width="150" height="150" alt="" className="rounded-full" />
							<hr className="h-px w-30 bg-gray-300 border-0"></hr>
						</span>
						<h1 className="text-5xl text-center font-alumni">Jonne Kaunisto</h1>
						<p className="text-2xl text-center font-alumni">Software Engineer</p>
					</header>

					<footer>
						<ul className="icons flex justify-center gap-4 mt-4">
							<a href="https://github.com/jonnekaunisto">
								<FaGithub className="size-7 hover:fill-red-300" />
							</a>
							<a href="https://www.linkedin.com/in/jonnekaunisto/">
								<FaLinkedin className="size-7 hover:fill-blue-300" />
							</a>
							<a href="achievements.html">
								<FaTrophy className="size-7 hover:fill-green-300" />
							</a>
							<a href="projects.html">
								<IoIosInformationCircleOutline className="size-7 hover:fill-purple-300" />
							</a>
						</ul>
					</footer>
				</section>
			</div>
		</div>
	);
}
