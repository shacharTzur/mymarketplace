import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js"

import FullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

import Brands from '../components/getters/Brands'

function IWantPage() {
	const authCtx = useContext(AuthContext);
	return (<section>
	<Header />
		<FullForm userName={authCtx.token}/>
	</section>

	)}

export default IWantPage;