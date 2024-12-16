import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"
import { Avatar } from "./avatar.jsx";
import { Comment } from "./comment.jsx";
import styles from "./post.module.css"
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps){
    const [comments, setComments] = useState([
        "Post muito bacana hein?!",
    ])

    const [newCommentTextArea, setNewCommentTextArea] = useState("");

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, })
    const publishedDateRelativeFromNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentTextArea]);
        setNewCommentTextArea("");
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("");
        setNewCommentTextArea(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório");
    }

    const isNewCommentEmpty = newCommentTextArea.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeFromNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === "paragraph"){
                        return (<p key={line.content}>{line.content}</p>);
                    } else if (line.type === "link"){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    onChange={handleNewCommentChange}
                    value={newCommentTextArea}
                    placeholder="Deixe um comentário" 
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    );
}