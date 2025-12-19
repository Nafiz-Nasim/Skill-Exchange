import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'

export default function SkillsDetails() {
  const data= useLoaderData();

  const {id}=useParams();
  const skill= data.find((data)=> (data.skillId==id));
  console.log(skill);
  
  console.log(id);
  
  console.log(data);
  
  return (
    <div
            key={skill.skillId}
            className="bg-white shadow-lg rounded-lg p-6 mb-8"
          >
            <div className="flex items-center mb-4">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="rounded-md h-48 w-48 object-cover mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {skill.skillName}
                </h3>
                <p className="text-lg text-gray-600 mb-1">
                  <strong>Provider:</strong> {skill.providerName}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${skill.providerEmail}`}
                    className="text-blue-500"
                  >
                    {skill.providerEmail}
                  </a>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Price:</strong> ${skill.price}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Rating:</strong> {skill.rating} ⭐
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Slots Available:</strong> {skill.slotsAvailable}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Description:</strong> {skill.description}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Experience:</strong> {skill.experiences}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Students Bought:</strong> {skill.studentsBought}
            </p>
            <Link to={'/'}>  <button className="btn btn-outline mt-10">go back </button></Link>
          
          </div>
  )
}
