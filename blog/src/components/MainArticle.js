import React from 'react'
import format from 'date-fns/format';
import "./css/mainarticle.css";

function MainArticle(props) {
    const CurrentDate = new Date();
    const formattedDate = format(CurrentDate, 'MMMM do, yyyy');


  return (
    <div className='main_article'>
      <div className="heading">
        <h1>{props.main_heading}</h1>
      </div>
      <div className="published_by">
        <p>Published by {props.author} on {formattedDate}</p>
      </div>
      <div className="main_img">
        <img src="https://t4.ftcdn.net/jpg/05/29/87/37/360_F_529873767_FMwTX8twWRwAI4xtk2X65THeflD7Fp9s.jpg" alt="" />
      </div>
      <div className="main_content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque placeat quae tempore fuga aspernatur cum ad? Quod possimus dolore nostrum quas qui odio quidem perspiciatis accusantium? Non necessitatibus natus quis enim amet, dolorem id, quos alias culpa error maiores. Eum dignissimos deleniti vero ducimus aperiam nisi dolor, doloremque rerum in dolorem incidunt sunt nihil, voluptas maxime natus vel quod libero temporibus, iste nostrum fuga soluta accusantium. Sapiente eius repudiandae consequatur illum neque dolor vitae magni sed provident enim non pariatur molestiae aliquid voluptatem, nulla inventore. Corporis minima numquam voluptate iusto nihil ut alias accusamus dolor ipsum perferendis beatae asperiores dicta qui adipisci consectetur quas aliquid dolorum, maxime veritatis necessitatibus repellat, laborum dolores! Dolorum consequatur perferendis harum, quisquam vitae impedit ipsam? Enim, eius magnam ea, voluptatibus ullam quaerat et quo error sunt excepturi laborum tempora neque ipsa harum saepe dolores. Porro, tempora ullam ducimus harum totam provident asperiores cumque odit, impedit quisquam consectetur praesentium a. Nobis tenetur reiciendis, nisi ad atque odit cum distinctio quaerat error ratione laboriosam ipsa a excepturi, amet commodi maiores illum qui? Ducimus ipsa aperiam deserunt fugiat, voluptatem nulla illum debitis libero officiis officia similique quaerat, reprehenderit inventore minus. Asperiores dolor a nihil voluptas facilis et!</p>
      </div>
    </div>
  )
}

export default MainArticle
