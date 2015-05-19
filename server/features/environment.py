def before_scenario(context, scenario):
    from core.services import postgres
    from identity.models.user import User
    postgres.drop_all()
    postgres.create_all()


def after_scenario(context, scenario):
    from core.services import postgres
    from identity.models.user import User
    postgres.drop_all()
    postgres.create_all()


def after_step(context, step):
    if step.status == "failed":
        import ipdb
        ipdb.post_mortem(step.exc_traceback)
