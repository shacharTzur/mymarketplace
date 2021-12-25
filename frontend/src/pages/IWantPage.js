import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js"

import FullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js"

import Brands from '../components/getters/Brands'


function IWantPage() {
	return (<section>
	<Header />
		<FullForm userName="hi"/>
	</section>

	)}

export default IWantPage;