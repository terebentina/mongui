import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
const beautify = require('js-beautify').js_beautify;
import Highlight from './doc/Highlight.jsx';
import Link from '../../../Tappable.jsx';
import { confirmAndRemoveDoc } from '../../../../actions';

import './Doc.scss';

const beautyOpts = { indent_size: 2 };

class Doc extends React.Component {
	static propTypes = {
		doc: React.PropTypes.object.isRequired,
		dispatch: React.PropTypes.func.isRequired,
	};

	shouldComponentUpdate = shouldPureComponentUpdate;

	onEditClick(e) {
		e.preventDefault();
	}

	onDeleteClick(e) {
		e.preventDefault();
		this.props.dispatch(confirmAndRemoveDoc(this.props.doc._id));
	}

	render() {
		return (
			<article>
				<header>
					<Link onClickTap={::this.onEditClick}><svg className="icon-create"><use xlinkHref="#icon-create"></use></svg></Link>
					<Link onClickTap={::this.onDeleteClick}><svg className="icon-delete"><use xlinkHref="#icon-delete"></use></svg></Link>
				</header>
				<div>
					<Highlight className="language-javascript">{beautify(JSON.stringify(this.props.doc), beautyOpts)}</Highlight>
				</div>
			</article>
		);
	}
}

export default Doc;
