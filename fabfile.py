from fabric.api import local


def stop():
    """Stop server"""
    local('sudo supervisorctl stop distribution')


def start():
    """Start server"""
    local('sudo supervisorctl start distribution')


def restart():
    """Restart server"""
    local('sudo supervisorctl restart distribution')


def unit():
    """Run unit tests"""
    local('nosetests server --rednose')


def behave():
    """Run functional tests"""
    local('behave server/features')


def tree():
    """Show project structure"""
    local('tree --dirsfirst -d -I "components" -L 4')


def cloc():
    """Count lines of code"""
    local('cloc . --exclude-dir=./client/static/components')
