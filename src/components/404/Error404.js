import React from 'react' 
import { Card, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom'


const Error404 = () => {

    const navigate = useNavigate()
    return (
        <Card className="text-center">
            <Card.Body className="p-5">
                <div className="display-5 text-300 fs-error">404</div>
                <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                    Страница не существует
                </p>
                <hr />
                <Button
                    size='sm'
                    variant='primary'
                    onClick={() => navigate(-1)}
                >
                    Назад
                </Button>
                {/* <NavLink className="btn btn-primary btn-sm ms-3" href="/">
                    На главную
                </NavLink> */}
            </Card.Body>
        </Card>
    )
}

export default Error404