import CommentService from '../services/CommentService';

class CommentController {
  /**
   * @swagger
   * path:
   *  /api/comments:
   *    get:
   *      summary: Get all comments
   *      tags:
   *        - Comments
   *      responses:
   *        200:
   *          description: List of comments
   */
  async index(req, res) {
    const comments = await CommentService.all();
    const response = {
      success: true,
      data: comments,
    };

    return res.json(response);
  }

  /**
   * @swagger
   * path:
   *  /api/comments/{comment_id}:
   *    get:
   *      summary: Get a comment by id
   *      tags:
   *        - Comments
   *      parameters:
   *      - name: comment_id
   *        in: path
   *        required: true
   *        type: integer
   *      responses:
   *        200:
   *          description: Comment Details
   */
  async get(req, res) {
    const comment = await CommentService.find(req.params.id);
    const response = {
      success: true,
      data: comment,
    };
    return res.json(response);
  }

  /**
   * @swagger
   * path:
   *  /api/comments:
   *    post:
   *      summary: Create a new comment
   *      tags:
   *        - Comments
   *      parameters:
   *      - name: comment
   *        in: body
   *        schema:
   *          type: object
   *          required:
   *            - name
   *            - email
   *            - comment
   *          properties:
   *            name:
   *              type: string
   *            email:
   *              type: string
   *            comment:
   *              type: string
   *      responses:
   *        200:
   *          description: Success
   */
  async post(req, res) {
    const comment = await CommentService.create(req.body);

    return res.json({ success: true, data: comment });
  }

  /**
   * @swagger
   * path:
   *  /api/comments/{comment_id}:
   *    put:
   *      summary: Update comment
   *      tags:
   *        - Comments
   *      parameters:
   *      - name: comment_id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: comment
   *        in: body
   *        schema:
   *          type: object
   *          required:
   *            - name
   *            - email
   *            - comment
   *          properties:
   *            name:
   *              type: string
   *            email:
   *              type: string
   *            comment:
   *              type: string
   *      responses:
   *        200:
   *          description: Success
   */
  async put(req, res) {
    const comment = await CommentService.update(req.params.id, req.body);

    return res.json({ success: true, cata: comment });
  }

  /**
   * @swagger
   * path:
   *  /api/comments/{comment_id}:
   *    delete:
   *      summary: Delete comment
   *      tags:
   *        - Comments
   *      parameters:
   *      - name: comment_id
   *        in: path
   *        required: true
   *        type: integer
   *      responses:
   *        200:
   *          description: Success
   */
  async delete(req, res) {
    const comment = await CommentService.delete(req.params.id);

    return res.json({ success: true, data: comment });
  }
}

export default new CommentController();
