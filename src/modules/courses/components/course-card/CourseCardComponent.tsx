import './CourseCardComponent.css';

import { Course } from '../../../../types/course';
import { NavLink } from 'react-router-dom';

type Props = {
  readonly course: Course;
};

export function CourseCardComponent({ course }: Props) {
  return (
    <div className="courseCardComponent">
      <div className="courseCardComponentTitle">
        {course.title}
      </div>

      <div className="courseCardComponentDescription">
        {course.description}
      </div>

      <div className="courseCardComponentWantToImprove">
        <span>Want to improve: </span>
        <input type="checkbox" checked={course.wantToImprove} readOnly/>
      </div>

      <div className="courseCardComponentActions">
        <button className="courseCardComponentActionsItem">
          <NavLink to={`/courses/${course.id}`}>Open</NavLink>
        </button>
        <button className="courseCardComponentActionsItem" disabled>Edit</button>
        <button className="courseCardComponentActionsItem" disabled>Delete</button>
      </div>
    </div>
  );
}
