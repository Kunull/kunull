import Button from '../Button/Button';
import './Footer.css';
import '../Button/Button';

const Footer = () => {
	return (
		<footer className="capital">
     			<ul className="footerUl">
				<ul className="footerGridInner">
				  	<li className="footerLi">
						<Button 
		    					button="REPORTS"
							buttonClassName="reports secondaryButton clickable"
							buttonHref="https://reports.kunull.net/"
							target="_blank"
							ariaLabel=""
		  				/>
					</li>

					<li className="footerLi">
						<Button 
		          				button="WRITEUPS"
							buttonClassName="write-ups secondaryButton clickable"
							buttonHref="https://writeups.kunull.net/"
							target="_blank"
							ariaLabel=""
		    				/>
	      				</li>
	
					<li className="footerLi">
						<Button 
		          				button="BLOG"
							buttonClassName="blog secondaryButton clickable"
							buttonHref="https://blog.kunull.net/"
							target="_blank"
							ariaLabel=""
		        			/>
					</li>								
				</ul>

								
				<ul className="footerGridInner">
					<li className="footerLi">
		        			<Button 
		    					button="GITHUB"
							buttonClassName="github secondaryButton clickable"
							buttonHref="https://github.com/kunull"
							target="_blank"
				  			ariaLabel=""
		  				/>
	    				</li>

					<li className="footerLi">
						<Button 
		          				button="LINKEDIN"
					  		buttonClassName="linkedin secondaryButton clickable"
							buttonHref="https://www.linkedin.com/in/kunull/"
							target="_blank"
							ariaLabel=""
		    				/>
	  				</li>
								
				  	<li className="footerLi">
						<Button 
		    					button="RESUME"
							buttonClassName="resume secondaryButton clickable"
							buttonHref="/assets/resume/Kunal-Walavalkar-Resume.pdf"
							target="_blank"
							ariaLabel="Check out my resume"
		  				/>
					</li>
				</ul>	

								
				<ul className="footerGridInner">				
					<li className="footerLi">
						<Button 
		          				button="EMAIL"
							buttonClassName="email secondaryButton clickable"
							buttonHref="mailto:contact@kunull.net"
							target="_blank"
							ariaLabel="Send me an email"
		        			/>
					</li>

{/*
					<li className="footerLi">
					 	<Button 
		   			        	button="PGP KEY"
					   		buttonClassName="key secondaryButton clickable"
					 		buttonHref="https://kunull.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
					 		target="_blank"
					 		ariaLabel=""
		  			  	/>
	  			 	</li>	
*/}

					<li className="footerLi">
						<Button 
		          				button="MATRIX"
					  		buttonClassName="matrix secondaryButton clickable"
							buttonHref="https://matrix.to/#/@kunull:matrix.org"
							target="_blank"
							ariaLabel=""
		    				/>
	  				</li>	
				</ul>
  			</ul>
    		</footer>
	);
};

export default Footer;
