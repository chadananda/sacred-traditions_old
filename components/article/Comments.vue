<template>
    <div id="comments" class="comments-area">
        <div class="section-title">
            <h3>4 Comments</h3>
        </div>

        <nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">
            <h2 class="screen-reader-text">Comment navigation</h2>
            <div class="nav-links">
                <div class="nav-previous">
                    <a href="#comments">Older Comments</a>
                </div>
                <div class="nav-next">
                    <a href="#comments">Newer Comments</a>
                </div>
            </div>
            <!-- .nav-links -->
        </nav>
        <!-- #comment-nav-above -->
        <ol class="comment-list">
            <li class="comment even parent">
                <article class="comment-body">
                    <footer class="comment-meta">
                        <div class="comment-author vcard">
                            <img alt src="~/assets/img/astrif-comment-author-01.jpg" class="avatar">
                            <span class="fn">Jessica</span>
                        </div>
                        <!-- .comment-author -->
                        <div class="comment-metadata">
                            <a href="#">
                                <time datetime="2016-05-09T00:51:13+00:00">May 9, 2016 at 11:21 am</time>
                            </a>
                        </div>
                        <!-- .comment-metadata -->
                    </footer>
                    <!-- .comment-meta -->
                    <div class="comment-content">
                        <p>Nowadays, a family is simply a network of people who care for each other. It can contain hundreds or two. You can be born into one or build your own.</p>
                    </div>
                    <!-- .comment-content -->
                    <div class="reply">
                        <a rel="nofollow" class="comment-reply-link" href="#respond">Reply</a>
                    </div>
                </article>
                <!-- .comment-body -->
                <ol class="children">
                    <li class="comment even parent">
                        <article class="comment-body">
                            <footer class="comment-meta">
                                <div class="comment-author vcard">
                                    <img alt src="~/assets/img/astrif-comment-author-02.jpg" class="avatar">
                                    <span class="fn">Jane Doe</span>
                                </div>
                                <!-- .comment-author -->
                                <div class="comment-metadata">
                                    <a href="#">
                                        <time datetime="2016-05-09T00:51:13+00:00">May 9, 2016 at 12:51 am</time>
                                    </a>
                                </div>
                                <!-- .comment-metadata -->
                            </footer>
                            <!-- .comment-meta -->
                            <div class="comment-content">
                                <p>Nowadays, a family is simply a network of people who care for each other. It can contain hundreds or two. You can be born into one or build your own.</p>
                            </div>
                            <!-- .comment-content -->
                            <div class="reply">
                                <a rel="nofollow" class="comment-reply-link" href="#respond">Reply</a>
                            </div>
                        </article>
                        <!-- .comment-body -->
                        <ol class="children">
                            <li class="comment even parent">
                                <article class="comment-body">
                                    <footer class="comment-meta">
                                        <div class="comment-author vcard">
                                            <img alt src="~/assets/img/astrif-comment-author-03.jpg" class="avatar">
                                            <span class="fn">Diana Brown</span>
                                        </div>
                                        <!-- .comment-author -->
                                        <div class="comment-metadata">
                                            <a href="#">
                                                <time datetime="2016-05-09T00:51:13+00:00">May 9, 2016 at 12:51 am</time>
                                            </a>
                                        </div>
                                        <!-- .comment-metadata -->
                                    </footer>
                                    <!-- .comment-meta -->
                                    <div class="comment-content">
                                        <p>Nowadays, a family is simply a network of people who care for each other. It can contain hundreds or two. You can be born into one or build your own.</p>
                                    </div>
                                    <!-- .comment-content -->
                                    <div class="reply">
                                        <a rel="nofollow" class="comment-reply-link" href="#respond">Reply</a>
                                    </div>
                                </article>
                                <!-- .comment-body -->
                                <ol class="children">
                                    <li class="comment even parent">
                                        <article class="comment-body">
                                            <footer class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img alt src="~/assets/img/astrif-comment-author-04.jpg" class="avatar">
                                                    <span class="fn">Briana Smith</span>
                                                </div>
                                                <!-- .comment-author -->
                                                <div class="comment-metadata">
                                                    <a href="#">
                                                        <time datetime="2016-05-09T00:51:13+00:00">May 9, 2016 at 12:51 am</time>
                                                    </a>
                                                </div>
                                                <!-- .comment-metadata -->
                                            </footer>
                                            <!-- .comment-meta -->
                                            <div class="comment-content">
                                                <p>Nowadays, a family is simply a network of people who care for each other. It can contain hundreds or two. You can be born into one or build your own.</p>
                                            </div>
                                            <!-- .comment-content -->
                                            <div class="reply">
                                                <a rel="nofollow" class="comment-reply-link" href="#respond">Reply</a>
                                            </div>
                                        </article>
                                        <!-- .comment-body -->
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>
        <!-- .comment-list -->
        <nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
            <h2 class="screen-reader-text">Comment navigation</h2>
            <div class="nav-links">
                <div class="nav-previous">
                    <a href="#comments">Older Comments</a>
                </div>
                <div class="nav-next">
                    <a href="#comments">Newer Comments</a>
                </div>
            </div>
            <!-- .nav-links -->
        </nav>
        <!-- #comment-nav-below -->
        <div id="respond" class="comment-respond">
            <div class="section-title">
                <h3>Leave a comment</h3>
            </div>
            <form class="form-horizontal comment-form">
                <div class="form-group">
                    <div class="col-sm-12">
                        <label>Message</label>
                        <textarea class="form-control" rows="6"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-4">
                        <label>Name *</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-4">
                        <label>Email *</label>
                        <input type="email" class="form-control">
                    </div>
                    <div class="col-sm-4">
                        <label>Website</label>
                        <input type="url" class="form-control">
                    </div>
                </div>
                <p class="form-submit">
                    <input name="submit" type="submit" class="btn btn-default" value="Submit">
                </p>
            </form>
        </div>
        <!-- .comment-respond -->
    </div>
</template>

<script>
  export default {
    name: "Comments"
  };
</script>

<style scoped>

</style>