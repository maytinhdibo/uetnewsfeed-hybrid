import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ReadPage extends Component {
    render() {
        return (
            <div id="readnews">
                <div className="news-img">
                </div>
                <span className="back">
                    <Link to="/home">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </span>
                <span className="header-read">

                    Tiêu đề bài viết ở đây nè
                </span>
                <div className="news-content">
                    <div>
                        Và đây là nội dung bài viết.
                        Lorem ipsum dolor sit amet, ullum recteque at sit, his id odio nisl definiebas. Vis et antiopam perpetua, ei graeco erroribus vis, eius labitur id sea. Exerci nonumes complectitur id vel. Eam antiopam reformidans consectetuer eu, agam movet audiam mei ad. An eligendi vivendum deserunt sed, no animal deterruisset pro.
                        Corpora voluptatum his cu. Ius cu amet natum singulis. Duo id labitur quaeque diceret. Cu vis appetere delicata, audire voluptatibus pri at. Nec mucius noster id. Velit perpetua partiendo sit et, numquam torquatos adversarium ei ius. Ex vitae fabulas comprehensam mel, autem veritus an duo.
                        Eam ut etiam denique intellegam. Inciderint necessitatibus vix in, ad nec consul menandri aliquando. Ne adhuc ignota eos, harum invenire qui at. Cum ocurreret elaboraret cu, cu dico error eos. Per ei nostrud meliore docendi, veniam deseruisse adipiscing usu ex, ad wisi ullum aliquam vis. Duo vocibus propriae accusamus eu. Audiam quaestio ne mea, qui ex augue erroribus, mundi epicurei maluisset at mel.
                        Qui congue iudico quando ad. Petentium iracundia ut vis, id alterum mentitum est, sumo velit pro eu. Mea id inani iuvaret aliquando. Numquam vocibus ocurreret nam ad. Vide utinam maluisset in mea, an quo illum repudiare. Eum veri dolores delicata ea.
                        Ne praesent persequeris ius. Duo ne dolor verear, ea eum primis semper. Ea eirmod expetenda vulputate nec, copiosae adversarium ne qui, has te laoreet tacimates. Eu debitis persecuti disputando vis. Ea laudem sapientem duo, vis ne dolorem elaboraret.
                    </div>
                </div>
            </div>
        )
    }
}
export default ReadPage;