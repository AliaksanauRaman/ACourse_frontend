import { useEffect, useState } from 'react';

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

        throw new Error('Get courses request is not ok!');
      });
  }

  return (
    <div className="coursesPage">
      <ul>
        {courses.map(course => <li key={course.id}>{course.title}</li>)}
      </ul>
    </div>
  );
}
