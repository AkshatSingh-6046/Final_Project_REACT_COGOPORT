import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article_details() {
   const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(async()=>{
    //  setTogglelike[false];
  const blogRequest = await axios.get(`http://10.10.12.125:3000/article/findById/${id}`);
  
   setBlog(blogRequest.data);
//    console.log(blogRequest.data);
//    setBlogs(blogRequest.data.Search)
},[])

  // setBlog({
  //     id: 1,
  //     title: "Blog Title",
  //     date: "01-01-2000",
  //     category: "Design",
  //     text: "ajdsnpasdidsvdsasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
  //     imgsrc: '/pexels-pixabay-531880.jpeg',
  //   },[])

  return (
    <div>
      <div className="h-96 w-full mt-24 ">
        <img
          className="w-full h-full object-cover"
          src="/pexels-pixabay-531880.jpeg"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center items-center py-8 ">
        <div className="font-medium text-2xl flex flex-col  flex-wrap items-center gap-6">
          <div className="article-category"></div>
          <div >{blog.article_title}</div>

          <div className="article-desc ">
            {blog.article_content}<br/>{blog.createdOn}
          </div>
          <div className="h-24 w-24  rounded-full">
           
            <img className="rounded-full" src="/pexels-pixabay-531880.jpeg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap flex-col px-72 py-16 gap-10 rounded-full"><div className="text-3xl sans underline">INTRODUCTION</div>
      <div>cidsVOIUDN AUEFHAIUES FYAUIEFYAUEFH AIUSFGAIUE FGAUOIE FYAUWEFY AIUWEFY AUWEFYAUIWEFHAUWEFH AUWEFHAY SGFAUSEGFAUSEGFAU 
        YEWGFAUYE GFUAEG FUAYEGFAEGF AEFASEFASIUFHISUEFHAUYE UEFIUAEHFUAISE FUAE</div><img className='w-full rounded-3xl' src="/pexels-pixabay-531880.jpeg"/>
        <div>Lorem lorem*600 ipsum dolor, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eos minima eligendi, voluptas sapiente vel? Commodi voluptatem mollitia minus velit dolores voluptate veritatis non doloribus, sapiente itaque unde consectetur laborum.
        Numquam enim delectus placeat ex culpa hic. Soluta labore fugiat sed, repellendus tempora maiores, officia sit excepturi quaerat ipsa, recusandae quo corrupti perspiciatis eos qui. Maiores excepturi nobis soluta vero?
        Eius tempora impedit dolores ipsam, quia porro suscipit enim iste dolore voluptas sapiente architecto ut nobis maiores ab, est deserunt! Itaque minus enim ab officia, dolores sapiente ut libero architecto.
        Alias cum at veniam? Tenetur in accusamus temporibus consequatur. Laudantium, quas repellat! Excepturi enim aliquam libero nostrum molestiae exercitationem nisi, nesciunt nihil. Assumenda maiores provident beatae animi vitae fugit dolorum.
        Minima minus illo molestiae dolorum consequatur ipsa omnis! Minima ab consectetur perspiciatis dolore officia cumque minus, sunt odio tempore sint eaque maiores dolorum tenetur nostrum libero autem quaerat obcaecati recusandae.
        Fuga commodi praesentium quasi repellat quae quam velit laudantium nihil omnis dolorum hic molestiae veritatis, maiores neque! Incidunt sunt sed hic unde consequatur culpa vero, aliquid nostrum quis maxime quibusdam.
        Vel praesentium, delectus quod deleniti nihil numquam officiis magni maxime, iusto aspernatur laborum minus dolorem inventore minima optio. Itaque voluptatibus facere molestias dolorum molestiae ratione amet vero voluptatem, ipsum cum.
        Molestias, architecto. Perferendis eveniet impedit, corporis ipsa fugiat ab ad reprehenderit neque laborum, vitae modi qui ratione molestiae autem non ducimus suscipit quibusdam tempora itaque ullam voluptatibus nulla totam voluptatem.
        Voluptates adipisci expedita dicta non reprehenderit rerum laborum soluta recusandae sunt, fugit, quaerat eaque ipsam magnam nisi tenetur? Nihil dicta laudantium dolorum accusantium numquam dolor excepturi ad neque eius culpa!
        Eveniet repellendus labore corporis quisquam blanditiis sunt dignissimos totam a possimus aliquid ratione assumenda aut, culpa eum reprehenderit necessitatibus, tempore laborum voluptatem sit nostrum maiores quas. Sequi sunt incidunt beatae?
        Voluptas voluptatibus enim a culpa, atque, error impedit, accusantium autem nemo mollitia quidem ipsa reiciendis facilis saepe id recusandae dignissimos. Quia laboriosam iste magnam ad. Sit beatae ducimus obcaecati perferendis?
        Blanditiis aperiam veritatis voluptates incidunt magnam! Aperiam expedita impedit, accusamus possimus iure suscipit voluptatem blanditiis laboriosam, nobis dolorem unde, ut reprehenderit eveniet temporibus? Atque totam unde saepe explicabo dolor praesentium.
        Ut consequuntur ab, dolore repellat ullam, aliquid illo officiis natus deserunt odio a magni aspernatur beatae delectus officia aliquam architecto optio velit. Consectetur, fugiat pariatur error sed sint impedit quod.
        Doloremque, libero. Dicta error sequi fugiat neque aperiam iusto vel ex ipsam cupiditate? Quia blanditiis pariatur in obcaecati? Explicabo obcaecati expedita odit numquam odio fugit omnis fuga, modi corrupti repudiandae.
        Officia maiores beatae pariatur sint laboriosam impedit at aspernatur libero, neque dignissimos fugiat aliquam reiciendis quae. Ex veritatis sit, pariatur fuga voluptates adipisci cum placeat! Hic minus omnis libero totam?
        Eum optio distinctio sed, praesentium aliquam, eius impedit dolore est, quo vel hic similique debitis. Animi, error? Dolorum fuga enim cupiditate corporis dignissimos, aperiam quasi laborum a dolore minima! Eos.
        Distinctio deleniti repudiandae dignissimos voluptate quis doloribus iusto? Animi aut possimus dicta eveniet iusto molestias distinctio quibusdam magnam beatae, similique fugiat qui aspernatur unde accusantium, error minus iste inventore corrupti.
        Nihil, expedita ipsa repudiandae animi maxime aut laborum quaerat qui quos! Molestiae officia excepturi adipisci, rem nihil mollitia doloremque quia placeat, exercitationem temporibus libero vero delectus atque quam corporis aut.
        Delectus, accusantium non? Ipsam accusantium modi minima facilis corporis blanditiis et aliquid. Cumque debitis vero soluta magni minima incidunt suscipit laborum inventore molestias dolorem est porro quibusdam, maiores sit praesentium!
        Natus id hic odio distinctio veritatis neque temporibus expedita, mollitia sint aliquid dicta a ipsum libero totam rem reiciendis tenetur repellendus deleniti voluptatum officiis. Porro amet distinctio voluptas debitis harum!
        Consequuntur deserunt harum maiores consequatur debitis quod fuga a blanditiis ex eos! Ullam vero cum voluptatibus, iure aut cumque! Nihil cupiditate laborum optio accusamus omnis nobis perspiciatis, sit dolorum ducimus.
        Quo atque repellat magni vitae pariatur sed neque quisquam porro modi aut nihil, fuga soluta dolores debitis exercitationem placeat iusto. Doloremque quas ea eos quasi blanditiis. Aut voluptas dolores odio?
        Nam corrupti praesentium tenetur officiis voluptates nemo consectetur nobis? Omnis facere quas nam illo obcaecati, iste, eos est ratione perspiciatis delectus adipisci officiis earum, doloribus aut labore eaque dignissimos. Velit.
        Nemo dicta non similique cum? Corporis voluptatem aspernatur quo laboriosam autem eum perferendis illo qui impedit. Doloribus voluptatibus blanditiis, repellat iusto atque possimus ratione animi vel! Autem cumque minima doloribus.
        Repudiandae possimus explicabo iusto officia illum, omnis neque aliquam eius quos magnam sit eum nisi consequatur placeat fugiat modi reprehenderit exercitationem ipsam, necessitatibus quo! Tenetur iste rem magni culpa tempore?
        Quo in inventore fuga explicabo esse dolorum et, quisquam neque, dignissimos, corporis est. Blanditiis fugiat dolor delectus sint. Cumque pariatur eum expedita ut, excepturi dolor assumenda iste molestias praesentium qui?
        Ipsa, ea soluta unde quia dolorem odit voluptas dolorum nulla saepe esse nobis itaque ipsum, quo dolor eaque. Pariatur quos non corrupti modi dolore voluptas distinctio adipisci, impedit fugiat nemo.
        Totam similique consequuntur doloremque, sequi ex laboriosam, itaque ipsam aut nemo nulla cumque perferendis distinctio quaerat, qui magni adipisci? Perferendis ipsa amet earum id, maxime ut! Nam consequatur distinctio asperiores!
        Cupiditate molestiae reprehenderit consequatur corporis ea officiis libero pariatur laboriosam. Necessitatibus aut quis dolores neque? Expedita veritatis, molestiae impedit, quidem et ipsam at facilis sed est quam, perspiciatis sunt iusto.
        Ipsa, vero corporis. Beatae, quasi quis at, totam sapiente optio velit fuga aliquam maiores tempora odit sequi ex eaque deserunt consequatur officia nesciunt accusantium. Voluptatibus officia non repellat delectus neque.
        Ipsum dolor quisquam veniam aspernatur quis, voluptates natus eligendi fugit? Dicta placeat molestiae exercitationem aperiam. Doloribus ea iure quisquam. Alias nihil repellat sequi ratione reiciendis vero assumenda. Harum, dolores tempora!
        Tempore repudiandae aliquam doloremque obcaecati sunt ullam tempora numquam laboriosam fugiat aliquid minima ipsum, a vitae iure debitis ab? Quam incidunt voluptate nobis fugit nostrum assumenda ipsum eos commodi cumque?
        Blanditiis placeat dolor voluptas omnis labore aliquam hic ab eu quo porro delectus odit ut perferendis laborum doloremque natus iste, tempora, numquam in! Rem id explicabo cum consequuntur doloribus, laborum quae?
        Sit suscipit qui velit nisi voluptate sint quaerat magnam, quidem quas voluptatum doloremque, unde culpa incidunt repellat sapiente atque vel error. Id accusamus minima harum debitis voluptates labore itaque repudiandae?
        Doloremque eaque soluta esse repellat. Suscipit nihil officiis soluta eius voluptas tempora, deleniti ex? Facilis distinctio, obcaecati quis sint earum praesentium ipsum, cum voluptatum adipisci at fugiat ab animi exercitationem.
        Ullam unde exercitationem deleniti corporis doloremque non voluptas. Ipsum quos esse cupiditate nobis laudantium, odit autem necessitatibus, labore recusandae ut reiciendis saepe est laborum officia! A fugiat repellat aliquid minima?
        Quos labore, perferendis laudantium unde ipsum similique sunt accusamus esse sequi quibusdam blanditiis aperiam porro corrupti corporis aliquid odio necessitatibus perspiciatis, animi ratione obcaecati nihil, nulla molestiae iure. Possimus, voluptatum!
        Reiciendis, quisquam id iusto porro, voluptatum itaque sapiente aperiam dolores explicabo vel velit neque distinctio ipsa sequi facilis eum exercitationem ipsum temporibus ex fugit sunt. Delectus, labore. Minima, sed culpa!
        Atque ipsam asperiores quasi, et cupiditate vitae sed laborum, rem placeat voluptate esse velit fugiat facilis. Id culpa expedita distinctio, porro esse modi aut exercitationem ullam, harum veritatis nihil facere.
        Odio aliquid at explicabo, totam cum, id illo unde dolores, dolorem voluptatum animi! Commodi, optio nam. In, earum? Repudiandae nobis unde voluptate excepturi harum molestiae commodi. Itaque, ut! Doloremque, commodi!
        Cumque obcaecati rem fugit aperiam quod cum commodi in, eveniet amet non eius ex nulla quisquam dicta, vel dolor? Similique voluptates deserunt doloribus blanditiis cum voluptatum eaque aspernatur officiis a.
        At, repellat. Blanditiis voluptate excepturi ipsum labore ad corrupti asperiores rerum dolores obcaecati veniam facilis ducimus neque dignissimos recusandae, voluptates, nesciunt at nostrum provident? Non, tempore. Similique nobis rerum minima.
        Labore quae hic quas maxime totam, cum placeat voluptatem cupiditate nihil minima fuga molestias perspiciatis tenetur corporis qui sequi? Voluptate, perspiciatis. Quas eum nisi optio, odio necessitatibus voluptatem ratione dolorem.
        Praesentium officia voluptatem consequuntur fugiat debitis ratione, id totam ipsum officiis exercitationem rem dolor. Nisi ipsam earum nulla, quibusdam porro nihil odit nobis quo suscipit incidunt eum, alias modi excepturi.
        Saepe iure cupiditate amet enim placeat aliquid natus rem nobis doloribus officiis deserunt molestias veniam soluta quidem sed, ut fugit tenetur tempore sequi dolor. Et rerum mollitia temporibus adipisci delectus!
        Cupiditate, nam maiores! Error velit explicabo eveniet repudiandae quae veniam, id dolorem sit alias laudantium animi delectus pariatur impedit modi iure facere, veritatis quo natus. Odio nobis quod magnam alias?
        Quibusdam dolorem excepturi, blanditiis alias earum necessitatibus, mollitia pariatur corrupti odio voluptate iste, consectetur minima amet sit animi fugit? Sit aspernatur exercitationem, tempora optio eveniet adipisci reiciendis mollitia architecto distinctio!
        Aliquid beatae laboriosam, impedit quae aperiam iste laborum esse veritatis fugiat voluptatibus maiores quod, modi a, quam iure fuga. Perspiciatis culpa impedit aperiam accusamus, facilis quam velit corrupti ullam nostrum.
        Odio, quos? Assumenda tempora laborum cupiditate nisi, corporis voluptatibus laudantium ipsam accusamus dolores necessitatibus itaque commodi autem doloribus reprehenderit temporibus ut deleniti dolorum repudiandae libero pariatur corrupti! Ullam, a repellat!
        Voluptatum itaque perferendis quia quidem totam sit nemo vitae sint sequi. Soluta a nisi vero ullam ad odio libero dolorum rerum accusamus, ducimus reiciendis quae quidem quibusdam exercitationem architecto laudantium.
        Sit saepe eius eum incidunt velit voluptatem accusamus itaque aut quaerat iste inventore deserunt doloremque adipisci possimus minima quia excepturi, nihil reiciendis. A omnis est consequatur quae nisi suscipit soluta.
        Odit, impedit. Praesentium labore obcaecati quibusdam quia voluptate dolorem rerum cupiditate, dolor atque aspernatur officia, illum fuga dolores perferendis beatae, ad animi dolorum quo ratione repudiandae. Minus incidunt similique inventore!
        Rem voluptatibus optio doloribus est dolor et, iure sequi saepe eius labore in dolorum, eos laudantium provident, soluta a ipsum aliquid aut. Debitis veritatis optio quos cumque, exercitationem atque natus.
        Modi odit temporibus nesciunt quisquam, earum dolorum iure architecto rerum provident! Et est eius eligendi, ea sed assumenda error, cumque corporis a numquam delectus eum eos aperiam perferendis adipisci! Voluptatum?
        Magni possimus doloremque nulla itaque, nobis error expedita maxime numquam quis amet. Corrupti vero maiores provident ab, necessitatibus corporis quasi eligendi illo commodi unde atque inventore. Itaque debitis nesciunt ipsum!
        Et mollitia nulla sed quaerat. Necessitatibus amet quaerat iusto, autem ullam, voluptatem reiciendis vero similique cum vitae nemo iure sequi, asperiores perferendis deserunt cupiditate! Laboriosam obcaecati nulla aut ex! Facere.
        Inventore alias corporis dolorum obcaecati tenetur eveniet explicabo at nam, consectetur dolores incidunt perspiciatis rerum voluptate sit, doloribus exercitationem harum quaerat? Numquam aperiam, ducimus inventore vel dolores optio dolorum necessitatibus?
        Est voluptas, explicabo minus possimus ipsa, omnis earum minima amet ipsam doloribus hic. Eum, aliquid nisi modi quae iure quas omnis itaque ut laborum, ad optio harum aut, cupiditate sapiente.
        Optio nobis doloribus eius dolores recusandae ratione quas at incidunt quisquam atque rem ipsam aut reprehenderit, sed animi, expedita nam odio veritatis amet, quibusdam reiciendis? Temporibus nihil eligendi eum voluptatibus.
        Veritatis eum sapiente quod cupiditate impedit natus eveniet, a esse sequi earum tempora hic blanditiis tenetur eius enim placeat fugit? Alias laboriosam autem praesentium iste voluptates. Doloremque culpa debitis itaque?
        Esse molestiae sapiente cum quibusdam voluptate corporis ipsum asperiores aspernatur possimus expedita hic, sit quam nulla animi voluptatem cumque distinctio sunt minus? Voluptatibus cum, dolorem at omnis rerum asperiores quia?
        Ipsa ut consequatur itaque, quod quisquam doloribus officiis cum, quam magnam iusto amet beatae reiciendis necessitatibus optio ratione totam commodi. Nobis, modi suscipit quaerat in libero blanditiis laboriosam vero temporibus.
        Eos corrupti non saepe mollitia voluptatem omnis adipisci autem sequi quam ipsa sit, magnam, delectus tempore fuga aut molestiae ducimus obcaecati dolores nemo quod suscipit laboriosam id impedit pariatur? Quaerat.
        Illo debitis maiores iusto? Id pariatur dolores quis voluptates maiores eligendi asperiores corporis! Unde vitae cupiditate nemo fugiat laudantium obcaecati reprehenderit, eligendi voluptate maiores voluptatum? Ea et cupiditate perferendis dolorem.
        Ducimus, voluptatibus maiores? Officia, aliquid voluptates omnis earum neque voluptate quibusdam officiis saepe veritatis soluta, perferendis ea reprehenderit praesentium distinctio illo eligendi? Facere exercitationem corrupti natus tenetur, harum mollitia aliquam!
        Harum repudiandae quisquam qui eveniet voluptas voluptatibus deleniti alias inventore obcaecati nisi sequi asperiores iure, architecto quam aperiam. Quae nam alias sint. Aliquam cupiditate sunt in molestiae maxime sit harum!
        At distinctio est dolores facilis necessitatibus minima ea iusto, itaque unde numquam vitae id officiis molestias! Cum sed laudantium laboriosam quasi dolorum, minus omnis nihil alias culpa officiis. Itaque, id!
        Repudiandae necessitatibus hic vero libero sequi impedit omnis possimus ea labore explicabo, similique modi, quidem exercitationem enim voluptas quas unde? Impedit voluptatum rerum animi placeat? Nesciunt facilis non nobis beatae.
        Vitae dolorem provident doloribus adipisci, itaque autem cum obcaecati. Qui nihil sit quas modi, nulla, fugiat assumenda veniam voluptatum eos hic enim vel ratione blanditiis, delectus laboriosam maxime adipisci. Atque?
        Voluptatibus eum cumque praesentium aspernatur, quo quisquam et officiis iusto sapiente aperiam eius repellendus alias assumenda neque autem amet fuga quae possimus odio repellat incidunt. Eos deserunt quis blanditiis assumenda.
        Ipsam iure ipsum fugiat neque corrupti, alias non! Ullam provident, architecto deserunt delectus maxime quos dolores laborum. Officiis quibusdam autem culpa repellat vel, officia quo tempore facilis dolorum, deserunt libero.us voluptatibus? Dolores praesentium fugit tenetur magnam, architecto repellendus itaque expedita, delectus veritatis dolore voluptatem ipsam quo error recusandae? Harum aut rem enim totam.
        Nobis temporibus minus ducimus iure error laudantium tempore ullam animi assumenda perspiciatis odit eum, quas quo aspernatur. Dicta fugit obcaecati fuga, reiciendis, saepe veritatis magni reprehenderit eligendi temporibus quos voluptatem.
        Obcaecati quibusdam nesciunt ex sint. Officia repellendus debitis cumque sapiente vitae quisquam commodi reiciendis distinctio inventore molestias accusantium delectus quae rerum libero expedita dolores necessitatibus dolore, at dicta, autem modi!
        Excepturi soluta tenetur ea? Numquam quis, explicabo molestias nostrum earum labore deserunt voluptatibus doloribus cumque expedita, facere perspiciatis illum aspernatur, libero necessitatibus ut aperiam corporis consequuntur similique tempore voluptatem eius?
        Asperiores modi ex accusamus quod impedit harum maxime rem accusantium, quo assumenda, sit corrupti officia unde sunt vel aliquid. Voluptate voluptatum ducimus dicta numquam tenetur fuga nulla, est culpa reiciendis.
        Rem ipsa, optio asperiores eligendi cum iure ea aut quas ad assumenda. Optio sit, amet, repellat quod eum est eligendi ipsa, magnam nulla atque quaerat laborum maxime numquam odit labore?
        Optio quasi et rem rerum reiciendis maiores, eius sunt earum veritatis fugit veniam minima accusamus, animi molestiae minus. Aliquam, consectetur. Autem, id quos consectetur possimus aut ex? Natus, nihil porro?
        Cumque ipsam optio corporis deserunt repellendus dolorem provident, quaerat assumenda debitis, iure facilis laborum inventore ea explicabo odio atque officia aspernatur numquam voluptatum itaque illo libero reprehenderit sapiente. Ea, eaque?
        Mollitia cumque impedit voluptatem dolorum laborum rerum, fugit facere labore! Ea iure laborum blanditiis ipsam ad ab, facilis necessitatibus magnam omnis consectetur in nemo, dolorum nobis sequi molestias optio adipisci.
        Et quae blanditiis atque dolore, minus eaque excepturi aspernatur numquam, id consectetur, ipsum iusto soluta quia asperiores. Unde accusamus perferendis, consequatur perspiciatis praesentium nesciunt assumenda nemo, officiis aspernatur iusto deserunt.
        Odit nihil veritatis eum, aut velit aperiam in quis necessitatibus porro, consequatur expedita ratione quod? Inventore expedita fugit, sit illum alias culpa, ullam adipisci dignissimos eveniet qui earum, autem praesentium!
        Debitis, assumenda placeat repudiandae distinctio natus eos minima. Et doloribus dolorem accusantium nesciunt repellendus! Quasi omnis, ullam delectus culpa molestiae ad! Ipsa iusto, itaque sit quam consequuntur sunt illo ut.
        Quod itaque, fugiat harum aspernatur voluptatibus totam odio, aliquam unde quasi deserunt ex quaerat deleniti sapiente non voluptates, nostrum accusantium impedit porro fuga hic tenetur ipsum excepturi natus veritatis. Sapiente!
        Dolores tempore quibusdam corrupti ut harum et amet minus, accusamus aliquid sit quasi ex atque laborum, ea, omnis blanditiis velit? Modi quos assumenda sapiente beatae in quasi id? Eum, voluptatibus. sit amet consectetur adipisicing elit. Iste dolorem, corporis qui asperiores impedit perferendis expedita pariatur, molestiae voluptatum reprehenderit ut odio iusto debitis facilis nemo provident numquam quis veniam?
        </div>
        </div>
    </div>
    
  );
}

export default Article_details;
/*

width: 720px;
height: 24px;
border-radius:5em;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;


text-align: center;


color: #7F56D9;
 */
