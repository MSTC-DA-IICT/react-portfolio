import React from "react";
import "./Loader.css";
import LoadingImg from "../../image/Loading.svg";
function Loader(props) {
	const { setIsLoading } = props;
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
	return (
		<div className="loaders">
			<img alt="loading" className="loadingImg" src={LoadingImg} />
			<div class="css-typing">
				<p>
					<h1
						style={{
							color: "black",
							fontSize: "4rem",
							textShadow: "5px 5px 5px darkGrey",
						}}
					>
						loading
					</h1>
				</p>
			</div>
		</div>
	);
}

export default Loader;
