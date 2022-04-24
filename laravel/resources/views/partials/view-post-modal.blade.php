@section('view-post-modal');
<!-- Modal -->
<div class="modal text-dark fade" id="viewPostModal" tabindex="-1" aria-labelledby="viewPostModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body bg-dark p-5">
                <div id="loader" class="d-flex text-white-50 align-items-center justify-content-center">
                    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border mx-2" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div id="viewPostModalData" class="d-none">
                    <div class="d-flex align-items-center justify-content-center mb-5">
                        <img src="" id="viewPostModalImage" alt="Post image" class="img-thumbnail post-image">
                    </div>
                    <div class="card mb-5">
                        <div class="card-header">
                            Post info
                        </div>
                        <div class="card-body">
                            <p class="lead"><strong>Title: </strong><span id="viewPostModalTitle"></span></p>
                            <p class="lead"><strong>Description: </strong><span id="viewPostModalDescription"></span></p>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <div class="card-header">
                            Post creator info
                        </div>
                        <div class="card-body">
                            <p class="lead"><strong>Name: </strong><span id="viewPostModalName"></span></p>
                            <p class="lead"><strong>Email: </strong><span id="viewPostModalEmail"></span></p>
                            {{--            <p class="lead"><strong>Created At: </strong>{{$post->human_readable_date}}</p>--}}
                            <p class="lead"><strong>Created At: </strong><span id="viewPostModalCreatedAt"></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@show
