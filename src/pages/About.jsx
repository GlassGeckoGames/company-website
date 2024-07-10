// src/pages/About.js



import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData';

function About() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-4 gap-4">
        {teamMembers.slice(0, 5).map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}

        {/* split the list and add the description in the middle  */}
        <div className="col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
          <h2 className="text-4xl font-bold mb-2 text-secondary">{aboutTitle}</h2>
          <p>{aboutDescription}</p>
        </div>

        {teamMembers.slice(5).map((member, index) => (
          <TeamMemberCard
            key={index + 5} // ensure unique keys
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;

// import React from 'react';
// import TeamMemberCard from '../components/TeamMemberCard';
// import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData';

// function About() {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid lg:grid-cols-4 gap-4">
//         {teamMembers.slice(0, 5).map((member, index) => (
//           <TeamMemberCard
//             key={index}
//             name={member.name}
//             role={member.role}
//             image={member.image}
//             description={member.description}
//           />
//         ))}

//         <div className="col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
//           <h2 className="text-4xl font-bold mb-2">{aboutTitle}</h2>
//           <p>{aboutDescription}</p>
//         </div>

//         {teamMembers.slice(5).map((member, index) => (
//           <TeamMemberCard
//             key={index + 5} // ensure unique keys
//             name={member.name}
//             role={member.role}
//             image={member.image}
//             description={member.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;

// import React from 'react';
// import TeamMemberCard from '../components/TeamMemberCard';
// import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData';

// function About() {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid lg:grid-cols-4 gap-2">


//         <TeamMemberCard
//           name={"Alice Johnson"}
//           role={"Project Manager"}
//           image={"chace_nielson.jpg"}
//           description={"Alice coordinates the team and ensures projects are on track."}
//         />
//         <TeamMemberCard
//           name={"Chace Nielson"}
//           role={"Software Developer"}
//           image={"glass.png"}
//           description={"Chace loves long walks on the beach."}
//         />
//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"chace_2.jpg"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />
//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"henery.png"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />
//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"henery.png"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />

//         <div className="col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
//           <h2 className="text-4xl font-bold mb-2">{aboutTitle}</h2>
//           <p>{aboutDescription}</p>
//         </div>

//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"henery.png"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />
//         <TeamMemberCard
//           name={"Alice Johnson"}
//           role={"Project Manager"}
//           image={"chace_nielson.jpg"}
//           description={"Alice coordinates the team and ensures projects are on track."}
//         />
//         <TeamMemberCard
//           name={"Chace Nielson"}
//           role={"Software Developer"}
//           image={"glass.png"}
//           description={"Chace loves long walks on the beach."}
//         />
//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"chace_2.jpg"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />
//         <TeamMemberCard
//           name={"Carol White"}
//           role={"UX Designer"}
//           image={"henery.png"}
//           description={"Carol designs user interfaces and improves user experience."}
//         />
//       </div>
//     </div>
//   );
// }

// export default About;





// import React from 'react';
// import TeamMemberCard from '../components/TeamMemberCard';
// import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData'

// function About() {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 m-1 ">
//       {teamMembers.map((member, index) => (
//           <>
//             {index === 5 ? (
//               <div className="col-span-2 bg-primary text-black p-4 h-full">
//                 <h2 className="text-4xl font-bold mb-2 text-center">{aboutTitle}</h2>
//                 <p className="text-center">{aboutDescription}</p>
//               </div>
//             ) : ( null )}

//             <TeamMemberCard
//               name={member.name}
//               role={member.role}
//               image={member.image}
//               description={member.description}
//             />
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;
