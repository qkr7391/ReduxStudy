import React, { Component, useState } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

function App() {
	const [subject, setSubject] = useState({
		mode: "welcome",
		selected_content_id: null,
		title: "WEB",
		sub: "world wide web!",
		welcome: { title: "welcome", desc: "Hello, React!!!" },
		contents: [
			{ id: 1, title: "HTML", desc: "HTML is for information" },
			{ id: 2, title: "CSS", desc: "CSS is for design" },
			{ id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
		],
	});

	var _title,
		_desc,
		_article = null;

	if (subject.mode === "welcome") {
		_title = subject.welcome.title;
		_desc = subject.welcome.desc;
		_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
	} else if (subject.mode === "read") {
		var i = 0;
		while (i < subject.contents.length) {
			var data = subject.contents[i];
			if (data.id === subject.selected_content_id) {
				_title = data.title;
				_desc = data.desc;
				break;
			}
			i++;
		}
		_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
	} else if (subject.mode === "create") {
		_article = <CreateContent></CreateContent>;
	}

	return (
		<div className="App">
			<Subject
				title={subject.title}
				sub={subject.sub}
				onChangePage={() => {
					setSubject({ ...subject, mode: "welcome" });
				}}
			></Subject>
			<TOC
				onChangePage={(id) => {
					setSubject({
						...subject,
						mode: "read",
						selected_content_id: Number(id),
					});
				}}
				data={subject.contents}
			></TOC>
			<Control
				onChangeMode={(_mode) => {
					setSubject({
						...subject,
						mode: _mode,
					});
				}}
			></Control>
			{_article}
			{/* <ReadContent title={_title} desc={_desc}></ReadContent> */}
		</div>
	);
}

// class App extends Component {
// constructor(props){
// super(props);
// 	this.state = {
// mode: "welcome",
// title: "WEB",
// 		subject:{title: 'WEB', sub: "world wide web!"},
// 		welcom: { title: "welcome", desc: "HEllo, React!!!" },
//		contents:[
//			{id:1, title:'HTML', desc: 'HTML is for information'}
//			{id:2, title:'CSS', desc: 'Css is for design'}
//			{id:3, title:'JavaScript', desc: 'JavaScript is for interactive'}
//		]
// 	}
// }
// 	render() {
// 		return (
// 			<div className="App">
// <Subject title={this.state.subject.title}
// sub={this.state.subject}></Subject>
// 			</div>
// 		);
// 	}
// }

export default App;
