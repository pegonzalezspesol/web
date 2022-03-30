# Copyright <2019> Pesol <pedro.gonzalez@pesol.es>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
{
    "name": "mail_chatt_filtering",
    "summary": """
        Extend the mail_chatt functionality to have filtering by author or by
         message content
    """,
    "category": "web",
    "author": "Pedro Gonzalez <pedro.gonzalez@pesol.es> ,"
    "Odoo Community Association (OCA)",
    "license": "AGPL-3",
    "website": "https://github.com/OCA/web",
    "version": "15.0.1.0.0",
    "depends": ["mail"],
    "data": [],
    "assets": {
        "mail.assets_discuss_public": [
            "web_chatt_filtering/static/src/models/chatter/chatter.esm.js"
        ],
        "web.assets_backend": [
            "web_chatt_filtering/static/src/models/chatter/chatter.esm.js"
        ],
        "web.assets_qweb": [
            "web_chatt_filtering/static/src/components/chatter/chatter.xml"
        ],
    },
}
