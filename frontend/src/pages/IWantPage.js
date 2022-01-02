import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"

import FullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

function IWantPage() {
	const authCtx = useContext(AuthContext);
	return (<section>
	<Header />
		<FullForm userName={authCtx.token}/>
	</section>

	)}

export default IWantPage;