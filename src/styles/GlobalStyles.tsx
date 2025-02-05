import { Global, css } from "@emotion/react";

const globalStyles = css`
	@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

	:root {
		--primary-color: #2196f3;
		--secondary-color: #bebec7;
		--border-radius: 4px;
	}

	* {
		box-sizing: border-box;
	}

	body,
	html {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}

	#root {
		display: flex;
		min-height: 100%;
		font-family: Lato, sans-serif;
	}

	.material-symbols-outlined {
		font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
	}
`;

function GlobalStyles() {
	return <Global styles={globalStyles} />;
}

export default GlobalStyles;
