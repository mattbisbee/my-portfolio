import React from "react";
import LinkResume from "../../assets/LinkResume.pdf";

const Résumé = () => (
  <main>
    <h1>Résumé</h1>
    <p>
      I have a long background in customer service and leadership. Far from being wasted training, I believe my experiences in my former career give me an advantage in the software developing world. I have led teams made up of people from different backgrounds and skill levels in challenging environments. I understand that the customer, or client, has high expectations of my performance and that of my team. In business, deadlines have to be met, expectations are high, and getting the most done in the smallest amount of time saves the company money. I led multi million dollar stores where multi-tasking was essential, working as a team was the only way to get it all done, and communication was vital to success. And yet, without people skills, it all fails to coalesce. My resume is included below for your consideration.
    </p>
    <div>
			<a href={LinkResume} target='_blank' rel='noreferrer'>View my Résumé</a>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </main>
);

export default Résumé;
