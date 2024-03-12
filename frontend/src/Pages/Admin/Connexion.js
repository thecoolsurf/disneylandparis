import '../../assets/css/admin/admin.css';
import { useState } from "react";
import { useAuth, AuthProvider } from '../../Components/Admin/Functions/AuthProvider.js';

export const AdminConnexion = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const auth = useAuth();
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.email && input.password) {
            console.log(input.email);
            console.log(input.password);
            auth.loginAction(input);
        }
        alert("please provide a valid input");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="admin">
            <form className="form" onSubmit={handleSubmitEvent}>
                <fieldset>
                    <legend>Admin</legend>
                    <div className="item">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@yahoo.com" onChange={handleInput} />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={handleInput} />
                    </div>
                    <button className="btn-submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}