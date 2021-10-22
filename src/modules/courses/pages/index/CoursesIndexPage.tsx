import { useEffect, useState } from 'react';
import './CoursesIndexPage.css';

import { CourseCardComponent } from '../../components/course-card';

import { Course } from '../../../../types/course';
import { API_URL } from '../../../../constants/api-url';

export function CoursesIndexPage() {
  const [courses, setCourses] = useState<Array<Course>>([]);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch(error => console.error('ERROR OCCURED!', error));
  }, []);

  async function fetchCourses(): Promise<Array<Course>> {
    return fetch(`${API_URL}/courses`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Get all courses request was not ok!');
      });
  }

  return (
    <div className="coursesIndexPage">
      <div className="coursesIndexPageHeader">Courses page</div>

      <ul className="coursesIndexPageBoard">
        {courses.map(course =>
          <li className="coursesIndexPageBoardItem" key={course.id}>
            <CourseCardComponent course={course}/>
          </li>
        )}
      </ul>
    </div>
  );
}
