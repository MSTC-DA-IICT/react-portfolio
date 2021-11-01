import React from "react";
import "./Loader.css";
function Loader(props) {
	const { setIsLoading } = props;
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
	return (
		<div className="loaders">
			<img alt="loading" className="loadingImg" src='/images/Loading.svg' />

			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loader;
