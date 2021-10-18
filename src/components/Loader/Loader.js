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

			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loader;
