/** @format */

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
// import { AnimatePresence } from 'framer-motion';

import {
	Animecard,
	Bannerimg,
	Banner,
	Banneroverlay,
	Cover,
	Coverimg,
	Animeinfo,
	Animetext,
	Title,
	Info,
	Details,
	Summary,
	Links,
	Resultfooter,
	Moreinfo,
	StyledLink,
	Closebtn,
	Genre,
} from './Resultstyle';

const Results = ({ animeinfo, time, episode, setanimeinfo }) => {
	// const links = ['Crunchyroll', 'Funimation', 'Hulu', 'AnimeLab'];

	const truncate = (str, num) => {
		if (str.length <= num) return str;
		return str.substring(0, num).concat('...');
	};
	if (animeinfo) {
		const {
			bannerImage,
			coverImage,
			description,
			title,
			seasonYear,
			externalLinks,
			siteUrl,
			genres,
		} = animeinfo;

		return (
			<Animecard
				initial={{ y: '100%' }}
				animate={{ y: 0 }}
				exit={{ y: '100%' }}
				transition={{
					duration: 0.35,
					ease: 'linear',
					type: 'Tween',
					delay: 0.2,
				}}>
				<Banner>
					<Closebtn
						onClick={() => {
							setanimeinfo(null);
						}}>
						<IoMdClose color={'black'} size={20} />
					</Closebtn>
					<Bannerimg src={bannerImage}></Bannerimg>
					<Banneroverlay></Banneroverlay>
				</Banner>
				<Animeinfo>
					<Cover>
						<Coverimg src={coverImage.large} alt=""></Coverimg>
					</Cover>
					<Animetext>
						<Title>{title.english}</Title>
						<Info>
							<Details>
								<h3>Ep {episode}</h3>
								<h3>
									at{' '}
									{(time / 60).toFixed(2).replace('.', ':')}
								</h3>
								<h3>{seasonYear}</h3>
							</Details>
							<Genre>
								<p>Genre: {genres.toString()} </p>
							</Genre>
						</Info>

						<Summary>
							<p>
								{description
									? truncate(description, 200)
									: null}
							</p>
							<Links>
								{externalLinks.map(({ id, site, url }) => {
									return (
										<li key={id}>
											<StyledLink
												href={url}
												target="_blank">
												{site}
											</StyledLink>
										</li>
									);
								})}
							</Links>
						</Summary>
					</Animetext>
				</Animeinfo>
				<Resultfooter>
					<Moreinfo href={siteUrl} target="_blank">
						<AiOutlineInfoCircle size={15} />

						<span>More Info</span>
						<IoIosArrowForward size={15} />
					</Moreinfo>
					<span>
						Information by{' '}
						<StyledLink href="https://anilist.com" target="_blank">
							Anilist
						</StyledLink>
					</span>
				</Resultfooter>
			</Animecard>
		);

		// return (
		// 	<Animecard
		// 		initial={{ y: '100%' }}
		// 		animate={{ y: 0 }}
		// 		transition={{ duration: 0.35, ease: 'linear', type: 'Tween', delay: 0.2 }}>
		// 		<Banner>
		// 			<Closebtn>
		// 				<IoMdClose color={'black'} size={20} />
		// 			</Closebtn>
		// 			<Bannerimg src={bannerimg}></Bannerimg>
		// 			<Banneroverlay></Banneroverlay>
		// 		</Banner>
		// 		<Animeinfo>
		// 			<Cover>
		// 				<Coverimg src={coverimg} alt=""></Coverimg>
		// 			</Cover>
		// 			<Animetext>
		// 				<Title>Kaguya Sama: Love is War</Title>
		// 				<Details>
		// 					{/* <h3>kaguya sama</h3> */}
		// 					<h3>Ep {episode}</h3>
		// 					<h3>At : {(time / 60).toFixed(2)}</h3>
		// 					<h3>2000</h3>
		// 				</Details>
		// 				<Summary>
		// 					{/* <p>{description}</p> */}
		// 					<Links>
		// 						{links.map(({ id, site, url }) => {
		// 							return (
		// 								<li key={id}>
		// 									<StyledLink href={url} target="_blank">
		// 										{site}
		// 									</StyledLink>
		// 								</li>
		// 							);
		// 						})}
		// 					</Links>
		// 				</Summary>
		// 			</Animetext>
		// 		</Animeinfo>
		// 		<Resultfooter>
		// 			<div>
		// 				<AiOutlineInfoCircle size={20} />
		// 				<span>More Info</span>
		// 				<IoIosArrowForward size={19} />
		// 			</div>
		// 			<span>
		// 				Information by{' '}
		// 				<StyledLink href="https://anilist.com" target="_blank">
		// 					Anilist
		// 				</StyledLink>
		// 			</span>
		// 		</Resultfooter>
		// 	</Animecard>
		// );
	} else return null;
};
export default Results;
