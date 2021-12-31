import Header from "components/headers/light.js"

import AddItemForm from "components/forms/AddItemForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

function AddItem() {
	const authCtx = useContext(AuthContext);
	return (<section>
	<Header />
		<AddItemForm userName={authCtx.token}/>
	</section>

	)}

export default AddItem;