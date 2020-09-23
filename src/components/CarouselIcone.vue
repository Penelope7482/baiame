<template>
<div id="carouselIcon">
    <div v-for="(massage, index) in massages" :key="massage" :id="massage.massageName" >  
        <p><b>Composant carouselIcone numéro: {{ index }}</b></p>
        <h1>{{massage.titre}}</h1>
        <div class="description" v-html="massage.description"></div>
    </div>
    </div>
</template>

<script>
export default {
    name: "CarouselIcone",
   
    data () {
        return {
            msg: 'test2',             
            massages : [
     { "massageName" : "Enfant",
     "titre": "Massage Enfant",
     "image" : "<img src='' alt='MassageEnfant'/>",
     "description" : "<p>Pour les enfants, je propose des massages relaxants dans le respect et l’écoute, ayant pour but :\r\n <ul>\r\n <li>Une prise de conscience de son schéma corporel.</li>\r\n <li> Un état de calme intérieur qui contribue à une meilleure concentration \r\n  et une meilleure gestion des émotions.</li>\r\n                <li>Une diminution des angoisses et un meilleur sommeil.</li>\r\n </ul></p>"
     },

     { "massageName" : "Senior",
        "titre": "Massage Senior",
        "image" : "<img src='' alt='MassageSenior'/>",
        "description" : "<p>Pour les personnes d’un certain âge, les contacts corporels se résument la plupart du temps à des soins médicaux. Pourtant ces contacts sont essentiels tout au long de la vie, tant sur le plan physique que mental. \r\n        Ainsi, par des massages doux et personnalisés je souhaite apporter tout à la fois une atténuation des douleurs et des raideurs, un sentiment de bien-être et de détente, mais également du lien. \r\n        Par un échange social et corporel,, des ressentis bien souvent anciens et oubliés pourront être réactivés.</p>"
     },

     { "massageName" : "Thaï",
        "titre": "Massage Thaï",
        "image" : "<img src='' alt='MassageThaï'/>",
        "description" : "<p>Le massage Thaïlandais est une pratique présentant des vertus revigorantes et stimulantes.\r\nJ’enchaîne pressions et étirements à l’aide des pouces, paumes, avant-bras, coudes, pieds et genoux, afin de libérer les flux d’énergies bloquées qui sont la cause de douleurs pouvant être un frein à l’épanouissement physique et mental.\r\nCe massage est réalisé au sol et se pratique habillé.</p>"
     },

     { "massageName" : "Sportif",
        "titre": "Massage Sportif",
        "image" : "<img src='' alt='MassageSportif'/>",
        "description" : "<p>Par des techniques d’effleurement, de pétrissage, de palper-rouler, d’étirements et de pressions, le massage permet de détendre l’organisme et de réduire les tensions musculaires.\r\n            <ul>\r\n                <li><em>Avant l’effort :</em><br> Il aide à  prévenir les douleurs musculaires, à échauffer les muscles pour les préparer à l’effort.\r\n            Il peut aider aussi à relaxer le sportif avant une compétition.</li>\r\n                <li><em>Pendant l’effort :</em><br>Il atténue les traumatismes musculaires et articulaires.</li>\r\n                <li><em> Après l’effort :</em><br>Il assouplit les muscles, régule le flux circulatoire, draine le système sanguin afin d’éliminer les toxines et permet de récupérer plus rapidement.\r\n            e diminution des angoisses et un meilleur sommeil.</li>\r\n            </ul>\r\n        </p>"
     },

     { "massageName" : "Rando-Massage",
        "titre": "Rando-Massage",
        "image" : "<img src='' alt='Rando-Massage'/>",
        "description" : "<p>Partager une journée hors des murs guidé par un accompagnateur en montagne,  marcher, découvrir des lieux merveilleux, ouvrir tous ses sens, puis se retrouver pour un moment de détente et de relaxation avec un massage, c'est l'aboutissement d'une extraordinaire complémentarité.</p>\r\n        <br><p>\r\n            Bruno et Veruschka se sont associés pour vous offrir le meilleur, en vous permettant de garder les souvenirs impérissables d’une randonnée et un corps tout à fait délassé.  \r\n        </p>"
     },

     { "massageName" : "Parent-Enfant",
        "titre": "Massage Parent-Enfant",
        "image" : "<img src='' alt='Massage Parent-Enfant'/>",
        "description" : "<p>A chacun son massage, de la douceur, de l’enveloppement, de l’écoute. Un moment de détente personnalisé en tandem.\r\n   <br><p>Un merveilleux  cadeau à s’offrir pour la fête des mères, la fête des pères ou tout simplement pour le plaisir.</p>"
     },

     { "massageName" : "Bien-être",
        "titre": "Massage Bien-être aux Huiles",
        "image" : "<img src='' alt='Massage Parent-Enfant'/>",
        "description" : "<p>Le massage Bien-être a pour but une relaxation maximale du corps et de l’esprit, un total lâcher prise. Il est toujours personnalisé. </p>\r\n       <p>Je propose un enchaînement de mouvements très variés, des  enveloppements, du pétrissage, des glissés profonds, des accu-pressions douces, des étirements légers… </p><br><p>Ce massage est réalisé sur une table, et se pratique avec une base d’huiles végétales agrémentées d’huiles essentielles ciblées.</p>"
     }
]
        }
    }
}

</script>