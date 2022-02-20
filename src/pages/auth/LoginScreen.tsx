import { useDispatch } from 'react-redux';
import { useForm } from "../../hooks";
import { startLoginEmailPassword } from "../../redux/actions";

export const LoginScreen = ({ title }: any): JSX.Element => {

	const dispatch = useDispatch();
	    
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

	const { email, password } = formValues;

	const handleLogin = (e: React.FormEvent ) => {
		e.preventDefault();
		dispatch( startLoginEmailPassword(email, password));
	}
	
	return (
		<div>
			<h1>{title}</h1>

			<form onSubmit={ handleLogin }>
				<input 
					type="text" 
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
				/>

				<input 
					type="password" 
					placeholder="Password"
					name="password"
					autoComplete="off"
					value={ password }
					onChange={ handleInputChange }
				/>

				<button type="submit">Login</button>

			</form>

		</div>
	)
};
