import Header from "components/headers/light.js"

import AddItemForm from "components/forms/AddItemForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

function AddItem() {
	const authCtx = useContext(AuthContext);
	return (<section>
	<Header />
		<AddItemForm userName={authCtx.token} description="Please follow our instruction for best shopping experience"/>
	</section>

	)}

export default AddItem;