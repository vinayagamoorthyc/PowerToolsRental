import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'typeface-montserrat';
import './/Search.css';

export default function Search(){
    return(
        <div className="search">
            <Form className="d-flex">
            <input type="text" name="text" class="input" placeholder="Search here..."></input>
            <Button variant="outline-warning" style={{borderRadius: '80px'}}><i class="bi bi-search"></i></Button>
          </Form>
        </div>
    );
}