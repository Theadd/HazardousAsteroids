"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
/*type CommentRowProps = {
    children: React.ReactNode;
    author: AuthorProps;
};*/
function CommentsBox(props) {
    let [state, updateState] = react_1.default.useState({
        comments: props.initialComments,
        page: props.page,
        hasMore: true,
        loadingMore: false,
    });
    function loadMoreClicked(evt) {
        let nextPage = state.page + 1;
        let comments = state.comments;
        updateState(prevState => (Object.assign(Object.assign({}, prevState), { page: nextPage, loadingMore: true })));
        let url = '/comments/page-' + (state.page + 1);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            updateState(prevState => (Object.assign(Object.assign({}, prevState), { comments: comments.concat(data.comments), hasMore: data.hasMore, loadingMore: false })));
        };
        xhr.send();
        evt.preventDefault();
    }
    let commentNodes = state.comments.map((comment) => (react_1.default.createElement(CommentRow, { author: comment.Author }, comment.Text)));
    function renderMoreLink() {
        if (state.loadingMore) {
            return react_1.default.createElement("em", null, "Loading...");
        }
        else if (state.hasMore) {
            return (react_1.default.createElement(Reactstrap.Button, { onClick: loadMoreClicked }, "Load More"));
        }
        else {
            return react_1.default.createElement("em", null, "No more comments");
        }
    }
    return (react_1.default.createElement("div", { className: "comments" },
        react_1.default.createElement("h1", null, "Comments"),
        react_1.default.createElement("ol", { className: "commentList" }, commentNodes),
        renderMoreLink(),
        react_1.default.createElement("hr", null)));
}
class Avatar extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getPhotoUrl = author => {
            return ('https://avatars.githubusercontent.com/' +
                author.GithubUsername +
                '?s=50');
        };
    }
    render() {
        return (react_1.default.createElement("img", { src: this.getPhotoUrl(this.props.author), alt: 'Photo of ' + this.props.author.Name, width: 50, height: 50, className: "commentPhoto mr-1" }));
    }
}
Avatar.propTypes = {
    author: prop_types_1.default.object.isRequired,
};
class CommentRow extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("li", null,
            react_1.default.createElement(Avatar, { author: this.props.author }),
            react_1.default.createElement("strong", null, this.props.author.Name),
            ': ',
            this.props.children));
    }
}
CommentRow.propTypes = {
    author: prop_types_1.default.object.isRequired,
    children: prop_types_1.default.string.isRequired
};
