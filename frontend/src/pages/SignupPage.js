import Header from "components/headers/light.js"

import SignupForm from "components/forms/SignupForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

function SignupPage() {
	return (
		<section>
			<Header />
			<SignupForm />
		</section>	
		)
}

export default SignupPage;