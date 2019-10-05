import React from 'react';
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
    state = {
        courses: []
    };

    componentDidMount() {
        getCourses().then(courses => this.setState({ courses: courses }));
    }

/*    renderRow(course) {
        return (
            <tr>
                <td>{ course.title }</td>
                <td>{ course.authorid }</td>
                <td>{ course.category }</td>
            </tr>   
        ); 
    }
*/
    render() {
        /* console.log(this.state.courses) */
        return (
        <>
        <h2>Courses</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead> 
            <tbody>
                    { this.state.courses.map(course => { 
                    return (
                        <tr>
                            <td>{ course.title }</td>
                            <td>{ course.authorid }</td>
                            <td>{ course.category }</td>
                        </tr>   
                        ); 
                    })}
            </tbody>             
        </table>
        </>
        );
    }
}
    

export default CoursesPage;