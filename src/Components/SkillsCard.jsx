import React from 'react'
import { Link } from 'react-router'

export default function SkillsCard({skill}) {
  return (
   <div className="skill-card max-w-xs my-10 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{skill.skillName}</h3>
        <p className="text-sm text-gray-600">{skill.description.slice(0, 100)}...</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-md font-medium text-gray-700">${skill.price}</span>
          <span className="text-sm text-yellow-500">
            {skill.rating} ★
          </span>
        </div>
        <div className="flex justify-end mt-4">
          <Link
            to={`/skill/${skill.skillId}`} // Redirect to the skill detail page
            className="text-blue-500 hover:underline"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  )
}
