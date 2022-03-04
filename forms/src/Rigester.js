import { useEffect, useState } from "react";
export default function Rigester() {
    const emailvalid = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    const passvalid = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$");
    const userNvalid = new RegExp("^[^\r\n\t\f\v ]*$");
    const [userForm, setUserForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    });
    const [userFormErrors, setUserFormError] = useState({
        nameErr: null,
        emailErr: null,
        usernameErr: null,
        passwordErr: null,
        confirmpasswordErr: null,
    });

    useEffect(() => {
        console.log(userForm);
    }, [userForm]);

    const handleFormChange = (e) => {
        if (e.target.name === "email") {
            setUserForm({
                ...userForm,
                email: e.target.value,
            });
            setUserFormError({
                ...userFormErrors,
                emailErr:
                    e.target.value.length === 0
                        ? "This field is required"
                        : !emailvalid.test(e.target.value)
                            ? "this email not valid"
                            : null
            });
        } else if (e.target.name === "name") {
            setUserForm({
                ...userForm,
                name: e.target.value,
            });
            setUserFormError({
                ...userFormErrors,
                nameErr:
                    e.target.value.length === 0
                        ? "This field is required"
                        : null,
            });
        } else if (e.target.name === "password") {
            setUserForm({
                ...userForm,
                password: e.target.value,
            });
            setUserFormError({
                ...userFormErrors,
                passwordErr:
                    e.target.value.length === 0
                        ? "This field is required"
                        : e.target.value.length < 3
                            ? "Min. Length is 8 characters"
                            : !passvalid.test(e.target.value)
                                ? "this password not valid"
                                : null,
            });
        } else if (e.target.name === "username") {
            setUserForm({
                ...userForm,
                username: e.target.value,
            });
            setUserFormError({
                ...userFormErrors,
                usernameErr:
                    e.target.value.length === 0
                        ? "This field is required"
                        : !userNvalid.test(e.target.value)
                        ?"this username should not have space"
                        : null,
            });
        } else if (e.target.name === "confirmpassword") {
            console.log(userForm);
            setUserForm({
                ...userForm,
                confirmpassword: e.target.value,
            });
            setUserFormError({
                ...userFormErrors,
                confirmpasswordErr:
                    e.target.value != userForm.password
                        ? "This field is confirm ur password"
                        : null,
            });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(userForm);
    };

    return (
        <div className="container my-5">
            <div>
                <h2>Login</h2>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={userForm.name}
                            aria-describedby="nameHelp"
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div id="nameHelp" className="text-danger form-text">
                            {userFormErrors.nameErr}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className={`form-control ${userFormErrors.emailErr ? "border-danger" : ""
                                }`}
                            name="email"
                            aria-describedby="emailHelp"
                            value={userForm.email}
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div id="emailHelp" className="text-danger form-text">
                            {userFormErrors.emailErr}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={userForm.username}
                            aria-describedby="usernameHelp"
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div id="usernameHelp" className="text-danger form-text">
                            {userFormErrors.usernameErr}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={userForm.password}
                            aria-describedby="passwordHelp"
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div id="passwordHelp" className="text-danger form-text">
                            {userFormErrors.passwordErr}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">
                            Confirmpassword
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="confirmpassword"
                            value={userForm.confirmpassword}
                            aria-describedby="confirmpasswordHelp"
                            onChange={(e) => handleFormChange(e)}
                        />
                        <div id="confirmpasswordHelp" className="text-danger form-text">
                            {userFormErrors.confirmpasswordErr}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

