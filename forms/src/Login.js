import { useEffect, useState } from "react";

export default function Login() {
    const emailvalid = new RegExp ("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
    });
    const [userFormErrors, setUserFormError] = useState({
        emailErr: null,
        passwordErr: null,
    });

    useEffect(() => {
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
                        : e.target.value.length < 8
                            ? "Min Length is 8 characters"
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
                <h2 className="mb-5">Register</h2>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
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
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

