import { Link } from "react-router-dom";
function Student() {
    return(
        <>
        <div className="upperpart">
            <h1>Student Detail</h1>
            <button>AddnewStudent</button>
        </div>

        <table border='2px'>
            <tr >
            <th>Name</th>
            <th>Age</th>
            <th>course</th>
            <th>Changecourse</th>

            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
            <tr>
                <td>Ritik</td>
                <td>11</td>
                <td>b.tech</td>
                <td><Link to="/">Edit</Link></td>
            </tr>
        </table>
        </>
    )
}
export default Student;