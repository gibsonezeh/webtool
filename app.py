from flask import Flask, render_template

app = Flask(__name__)

# Sample user data (replace with actual data retrieval logic)
users = {
    1: {'username': 'john_doe', 'email': 'john@example.com'},
    2: {'username': 'jane_doe', 'email': 'jane@example.com'}
}

@app.route('/webdevtools1.netlify.app/profile/<int:user_id>')
def profile(user_id):
    # Check if user_id exists in the users dictionary
    if user_id in users:
        user = users[user_id]
        print(user)
        return render_template('profile.html', user=user)
    else:
        return 'User not found', 404

if __name__ == '__main__':
    app.run(debug=True)